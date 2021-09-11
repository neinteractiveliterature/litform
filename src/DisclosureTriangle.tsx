export type DisclosureTriangleProps = {
  expanded: boolean;
};

function DisclosureTriangle({ expanded }: DisclosureTriangleProps): JSX.Element {
  if (expanded) {
    return <>▼</>;
  }

  return <>▶</>;
}

export default DisclosureTriangle;
