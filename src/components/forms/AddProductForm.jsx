
import { useForm } from "react-hook-form";
import { addProduct } from "../../services/products.service";
import { useState } from "react"; // Import Firebase
// import { imageStorage } from '../../config/firebase.config';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import logo from '/src/assets/img.jpg';


function AddProductForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null); // Track image URL for display

  const onSubmit = async (data) => {
    if (!image) {
      alert("Please select an image");
      return;
    }

    try {
      // Create a reference to the image in Firebase Storage
      const storage = getStorage();
      const imageRef = ref(storage, `products/${image.name}`);

      // Upload the image to Firebase Storage
      await uploadBytes(imageRef, image);

      // Get the download URL for the uploaded image
      const uploadedImageUrl = await getDownloadURL(imageRef);
      setImageUrl(uploadedImageUrl); // Update state for display

      // Combine product data with image URL
      const productData = { ...data, imageUrl: uploadedImageUrl };

      // Call your product addition service
      const addProductResponse = await addProduct(productData);

      reset();
      setImage(null);
      alert("Product added successfully");
    } catch (error) {
      console.error("Error uploading image to Firebase:", error);
      // Handle error (e.g., show error message to user)
    }
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  return (

    <>

    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="name"
        {...register("name", { required: true })}
      />
      {errors.name && <span>required</span>}
      <br />
      <br />
      <input
        type="number"
        placeholder="price"
        {...register("price", { required: true })}
      />
      {errors.price && <span>required</span>}
      <br />
      <br />
      <input
        type="number"
        placeholder="quantity"
        {...register("qty", { required: true })}
      />
      {errors.errors && <span>required</span>} {/* Typo fixed */}
      <br />
      <br />
      <textarea
        placeholder="description"
        cols="30"
        rows="10"
        {...register("description", { required: true })}
      ></textarea>
      {errors.description && <span>required</span>}
      <br />
      <br />
      <input
        className="custom-file-upload "
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      <br />
      {/* Conditionally render image preview if available */}
      {/* {imageUrl && <img src={imageUrl} alt="Uploaded product image" />} */}
      <br />
      <button type="submit">ADD</button>
    </form>
    </>
  );
}

export default AddProductForm;
