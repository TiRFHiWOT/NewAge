import Output from "./Output";

const ExpertiseList = ({ expertiseList, handleEdit, handleRemove }) => (
  <div className="mt-6">
    <h3 className="text-xl font-bold text-gray-400 mb-4">
      {expertiseList.length > 0 ? "Our Expertise" : "No Expertise Available"}
    </h3>

    {expertiseList.length > 0
      ? expertiseList.map((expertise) => (
          <Output
            key={expertise.id}
            expertise={expertise}
            handleEdit={handleEdit}
            handleRemove={handleRemove}
          />
        ))
      : ""}
  </div>
);

export default ExpertiseList;
