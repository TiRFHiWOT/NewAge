import Output from "./Output";

const AboutList = ({ aboutList, handleEdit, handleRemove }) => (
  <div className="mt-6">
    <h3 className="text-xl font-bold text-gray-400 mb-4">
      {aboutList.length > 0 ? "Our About" : "No About Available"}
    </h3>

    {aboutList.length > 0
      ? aboutList.map((about) => (
          <Output
            key={about.id}
            about={about}
            handleEdit={handleEdit}
            handleRemove={handleRemove}
          />
        ))
      : ""}
  </div>
);

export default AboutList;
