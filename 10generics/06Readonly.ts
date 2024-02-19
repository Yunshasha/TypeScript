// make every type read-only
interface Props {
  id: string;
  children: number[];
}
type ReadonlyProps = Readonly<Props>;

const r: ReadonlyProps = {
  id: "haha",
  children: [1, 2, 3],
};
r.id;
//   r.id= 'heihei'
