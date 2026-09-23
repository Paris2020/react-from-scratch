import ErrandListItem from "./ErrandListItem";

export default function ErrandList({ completedErrands, incompleteErrands }) {
  return (
    <div>
      <h1>My Errands</h1>
      <p>New errand form will go here...</p>
      <h3>Completed:</h3>
      {completedErrands.map((errand, index) => (
        <ErrandListItem errand={errand} key={index} />
      ))}
      <h3>Incompleted:</h3>
      {incompleteErrands.map((errand, index) => (
        <ErrandListItem errand={errand} key={index} />
      ))}
    </div>
  );
}
