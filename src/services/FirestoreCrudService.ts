import db from "../utils/firebase"; // tu instancia Firestore inicializada
import BaseModel from "../models/BaseModel";

export class FirestoreCrudService<T extends BaseModel> {
  private collectionName: string;

  constructor(collectionName: string) {
    this.collectionName = collectionName;
  }

  // Get all documents
  async getAll(): Promise<T[]> {
    const snapshot = await db.collection(this.collectionName).get();
    const items: T[] = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    } as T));
    return items;
  }

  // Get by id
  async getById(id: string): Promise<T | null> {
    const doc = await db.collection(this.collectionName).doc(id).get();
    if (!doc.exists) {
      return null;
    }
    return { id: doc.id, ...doc.data() } as T;
  }

  // Add new document
  async add(item: Omit<T, "id">): Promise<T> {
    const docRef = await db.collection(this.collectionName).add(item);
    return { id: docRef.id, ...item } as T;
  }

  // Update document by id
  async update(id: string, updatedData: Partial<T>): Promise<boolean> {
    const docRef = db.collection(this.collectionName).doc(id);
    const doc = await docRef.get();
    if (!doc.exists) {
      return false;
    }
    await docRef.update(updatedData);
    return true;
  }

  // Delete document by id
  async delete(id: string): Promise<boolean> {
    const docRef = db.collection(this.collectionName).doc(id);
    const doc = await docRef.get();
    if (!doc.exists) {
      return false;
    }
    await docRef.delete();
    return true;
  }
}
