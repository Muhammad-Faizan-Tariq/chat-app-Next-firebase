import moment from "moment";

export const formateDate = (date) => {

    const now = new Date()
    const diff = now.getTime() - date.getTime()

    if(diff < 60000){
        return "now";
    }

    if (diff < 3600000){
        return `${Math.round(diff/60000)} min ago`;
    }

    return moment(date).format("MM/DD/YY");
};