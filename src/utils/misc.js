import moment from "moment";

const formatCurrency = (num) =>
  Math.sign(num) === -1
    ? `-₦${num
        .toFixed(2)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
        .slice(1)}`
    : `₦${num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}`;

const formatDateWithTime = (date) => {
  return moment(date).format("d MMM YYYY,  h:mma");
};

export { formatCurrency, formatDateWithTime };
