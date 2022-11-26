export const ColGroup = ({ headers }: { headers: any[] }) => {
  const colWidth = `${100 / headers.length}%`;

  return (
    <colgroup>
      {headers.map((_, index) => (
        <col width={colWidth} key={index} />
      ))}
    </colgroup>
  );
};
