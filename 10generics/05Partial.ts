// make props optional
interface Props {
  id: string;
  children: number[];
}
type PartialProps = Partial<Props>;

let p1: Props = {
  id: "",
  children: [1],
};

const pp: PartialProps = {};
