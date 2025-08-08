import {db} from '../firebase';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';






class MemberService {  
    async addMember(memberData) {
    try {
      const docRef = await addDoc(collection(db, 'members'), memberData);
      return { id: docRef.id, ...memberData };
    } catch (error) {
      console.error("Error adding member: ", error);
      throw error;
    }
  }

  async getMembers() {
    try {
      const querySnapshot = await getDocs(collection(db, 'members'));
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error("Error getting members: ", error);
      throw error;
    }
  }

  async updateMember(id, memberData) {
    try {
      const memberRef = doc(db, 'members', id);
      await updateDoc(memberRef, memberData);
      return { id, ...memberData };
    } catch (error) {
      console.error("Error updating member: ", error);
      throw error;
    }
  }

  async deleteMember(id) {
    try {
      const memberRef = doc(db, 'members', id);
      await deleteDoc(memberRef);
    } catch (error) {
      console.error("Error deleting member: ", error);
      throw error;
    }
  }
}
export default new MemberService();