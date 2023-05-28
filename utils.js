getFileExtFromMimeType = mimeType => {
  switch ( mimeType ) {
    case "image/jpeg":
      return ".jpeg";

    case "image/png":
      return ".png";

    default:
      return "";
  }
}

exports.getFilename = mimeType => {
  const fileExt = getFileExtFromMimeType( mimeType );
  return fileExt ? ( Date.now() + fileExt ) : "";
}