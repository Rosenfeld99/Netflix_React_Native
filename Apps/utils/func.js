export const extractTitle = () => {
  const titleStr = "John Wick: Chapter 4";
  const colonIndex = titleStr.indexOf(":");
  // Check if there's a colon (:)
  if (colonIndex > 0) {
    // Slice the string after the colon, trim spaces, and encode
    return encodeURIComponent(titleStr.slice(colonIndex + 1).trim());
  } else {
    return encodeURIComponent(titleStr);
  }
  // Handle missing colon
  return null;
};

export const formatDateToText = (dateStr) => {
  // Parse the input date string into a Date object
  const dateObj = new Date(dateStr);

  // Define the options for formatting
  const options = { day: "numeric", month: "long" };

  // Format the Date object to the desired string format
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    dateObj
  );

  return formattedDate;
};
