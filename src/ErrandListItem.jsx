export default function ErrandListItem({
  errand,
  onCompletedClicked,
  onDeleteClicked,
}) {
  return (
    <div>
      <h3>{errand.text}</h3>
      {errand.isCompleted && <p>Complete!</p>}
      {errand.isCompleted ? (
        <button onClick={() => onDeleteClicked(errand.text)}>
          Delete Item
        </button>
      ) : (
        <button onClick={() => onCompletedClicked(errand.ext)}>
          Mark as Completed
        </button>
      )}
    </div>
  );
}
