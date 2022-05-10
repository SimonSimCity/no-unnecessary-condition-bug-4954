interface Property {
  [key: string]: [string] | undefined;
}

// Works correctly
((p: Property) => {
  return p.test?.[0].charAt(2);
})({} as Property);

// Should also not report anything ...
((p: Property | undefined) => {
  return p?.test?.[0].charAt(2);
})(undefined);
