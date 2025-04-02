const DescriptionList = ({
  items,
}: {
  items: ([string, string | number] | null)[];
}) => {
  return (
    <dl className="space-y-4 rounded-lg border bg-muted p-4">
      {items
        .filter((x) => x !== null)
        .map(([term, description], index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:justify-between"
          >
            <dt className="font-semibold text-primary">{term}</dt>
            <dd className="text-muted-foreground">{description}</dd>
          </div>
        ))}
    </dl>
  );
};

export default DescriptionList;
