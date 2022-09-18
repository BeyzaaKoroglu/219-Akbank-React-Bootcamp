/**
 * Size verilen iki adet array’den
 * uygun methodları kullanarak yeni
 * bir object oluşturmanız gerekiyor.
 * Ve bu obje key-value şeklinde
 * doğru eşleştirme yapılarak
 * oluşturulmalı.
 */

const denormalization = (obj) => {
  const denormalizedArr = obj.data.reduce((prevArr, currArr) => {
    let denormalizedObj = currArr.reduce((prevObj, currValue, idx) => {
      prevObj[obj.cols[idx]] = currValue;
      return prevObj;
    }, {});
    prevArr.push(denormalizedObj);
    return prevArr;
  }, []);
  return denormalizedArr;
};

const input = {
    "cols": ["Name Surname", "Company", "Email", "Date", "Country", "City"],
    "data": [
        ["Hyacinth Vincent", "Duis Corporation", "iaculis.enim@magnaCrasconvallis.ca", "28/06/2022", "Eritrea", "Lyubertsy"],
        ["Brenden Martinez", "Volutpat Nunc Associates", "iaculis@estMauris.org", "24/03/2021", "British Indian Ocean Territory", "Colwood"]]
}

const denormalizedInput = denormalization(input);
console.log(denormalizedInput)

const sampleoutput = [
    {
        "Name Surname": "Hyacinth Vincent",
        "Company": "Duis Corporation",
        "Email": "iaculis.enim@magnaCrasconvallis.ca",
        "Date": "28/06/2022",
        "Country": "Eritrea",
        "City": "Lyubertsy"
    },
    {
        "Name Surname": "Brenden Martinez",
        "Company": "olutpat Nunc Associates",
        "Email": "iaculis@estMauris.org",
        "Date": "24/03/2021",
        "Country": "British Indian Ocean Territory",
        "City": "Colwood"
    }
]
