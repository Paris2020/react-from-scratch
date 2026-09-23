import ErrandListItem from "./ErrandListItem";
import NewErrandForm from "./NewErrandForm";

export default function ErrandList({ completedErrands, incompleteErrands }) {
  return (
    <div>
      <h1>My Errands</h1>
      <NewErrandForm />
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
