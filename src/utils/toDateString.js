const toDateString = (dateString) => {
  let date = new Date(dateString);

  let day = date.getUTCDate().toString().padStart(2, "0");
  let month = (date.getUTCMonth() + 1).toString().padStart(2, "0"); // Month is 0-based, so we add 1
  let year = date.getUTCFullYear();

  let formattedDate = `${day}-${month}-${year}`;
  return formattedDate;
};

export default toDateString;
