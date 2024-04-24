const AboutComponents = ({ Title, Paragraph }) => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-white font-extrabold">{Title}</h2>
      <p>{Paragraph}</p>
    </div>
  );
};

export default AboutComponents;
