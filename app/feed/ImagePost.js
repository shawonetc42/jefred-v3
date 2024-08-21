const ImagePost = ({ user, content, imageUrl }) => (
  <div className="p-4 bg-white rounded shadow">
    <h3 className="text-xl font-bold">{user}</h3>
    <p className="mt-2">{content}</p>
    <img src={imageUrl} alt="Post image" className="mt-4 rounded" />
  </div>
);

export default ImagePost;
