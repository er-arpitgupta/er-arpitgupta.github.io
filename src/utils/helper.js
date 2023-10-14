export default function beforeSection(beforeHeading, heading) {
  return (
    <>
      <p className="before-heading"> {beforeHeading}</p>
      <p className="heading">{heading}</p>
    </>
  );
}

export const handleImagesImport = () => {
  const imageContext = require.context(
    '../assets/images',
    false,
    /\.(png|jpg|jpeg|gif|svg|webp)$/
  );

  let images = {};
  imageContext.keys().forEach(imagePath => {
    const imageName = imagePath.replace('./', '');
    images[imageName] = imageContext(imagePath);
  });
  return images;
};
