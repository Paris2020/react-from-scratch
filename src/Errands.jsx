import ErrandListItem from "./ErrandListItem";
import NewErrandForm from "./NewErrandForm";

export default function ErrandList({
  completedErrands,
  incompleteErrands,
  onCompletedClicked,
  onDeleteClicked,
  onCreateClicked,
}) {
  return (
    <div>
      <h1>My Errands</h1>
      <NewErrandForm onCreateClicked={onCreateClicked} />
      <h3>Completed:</h3>
      {completedErrands.map((errand, index) => (
        <ErrandListItem
          errand={errand}
          key={index}
          onDeleteClicked={onDeleteClicked} // props drilling
        />
      ))}
      <h3>Incompleted:</h3>
      {incompleteErrands.map((errand, index) => (
        <ErrandListItem
          errand={errand}
          key={index}
          onCompletedClicked={onCompletedClicked} // props drilling
        />
      ))}
    </div>
  );
}
