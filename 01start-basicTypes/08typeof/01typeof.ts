let p = { x: 1, y: 2 };

// orignal way:
// function formatPoint(point: { x: number; y: number }) {
//   console.log(point);
// }
// formatPoint(p);

function formatPoint(point: typeof p) {
  console.log(point);
}
formatPoint(p);
