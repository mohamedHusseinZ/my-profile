import { useRef } from 'react';
import { auth, storage, db } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore/lite';

const Home = () => {
  const form = useRef();

  const submitPortfolio = async (e) => {
    e.preventDefault();
    const name = form.current[0]?.value;
    const description = form.current[1]?.value;
    const url = form.current[2]?.value;
    const image = form.current[3]?.files[0];

    if (image) {
      const storageRef = ref(storage, `portfolio/${image.name}`);
      try {
        const snapshot = await uploadBytes(storageRef, image);
        const downloadUrl = await getDownloadURL(snapshot.ref);
        await savePortfolio({ name, description, url, image: downloadUrl });
      } catch (error) {
        console.error(error);
        await savePortfolio({ name, description, url, image: null });
      }
    } else {
      await savePortfolio({ name, description, url, image: null });
    }
  };

  const savePortfolio = async (portfolio) => {
    try {
      await addDoc(collection(db, 'portfolio'), portfolio);
      window.location.reload();
    } catch (error) {
      alert('Failed to add portfolio');
    }
  };

  return (
    <div className="dashboard">
      <form ref={form} onSubmit={submitPortfolio}>
        <p><input type="text" placeholder="Name" /></p>
        <p><textarea placeholder="Description" /></p>
        <p><input type="text" placeholder="Url" /></p>
        <p><input type="file" placeholder="Image" /></p>
        <button type="submit">Submit</button>
        <button type="button" onClick={() => auth.signOut()}>Sign out</button>
      </form>
    </div>
  );
};

export default Home;
