// eslint-disable-next-line react/prop-types
export default function Image({ src, width, height, alt }) {
  return (
    <>
      <img src={src} width={width} height={height} alt={alt} />
    </>
  );
}
