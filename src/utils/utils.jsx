


export const convertTime = (timeStamp) => {

    return new Date(timeStamp).toLocaleDateString(
      "default", { year: "numeric", month: "2-digit", day: "2-digit" }
    );
      

    
};
