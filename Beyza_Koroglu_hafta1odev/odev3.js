/**
 * Size verilen javascript dosyasında halihazırda array
 * ve fonksiyon isimleri yer alıyor. Aşağıdaki fonksiyonların
 * içerisine aldığı parametrelere göre comment satırındaki istenileni yapabilecek kod yazmanız bekleniyor.
 */

const parentFolderOf = (fileID) => {
  let parentID = -1;
  const parent = folders.find(
    (folder) => folder.files && folder.files.find((file) => file.id === fileID)
  );

  if (parent) parentID = parent.id;

  return parentID; //eğer dosyayı bulamazsa -1 dönecek
};

const remove = (fileID) => {
  const parents = folders.filter(
    (folder) => folder.files && folder.files.find((file) => file.id === fileID)
  );

  parents.map(
    (parent) =>
      (parent.files = parent.files.filter((file) => file.id !== fileID))
  );
};

const removeFolder = (folderID) => {
  const indexOfFolder = folders.indexOf(
    folders.find((folder) => folder.id === folderID)
  );

  if (indexOfFolder !== -1) folders.splice(indexOfFolder, 1);
};

const copy = (fileID, folderID) => {
  const parent = folders.find((folder) => folder.id === parentFolderOf(fileID));

  if (parent) {
    const copyThis = parent.files.find((file) => file.id === fileID);
    const copyTo = folders.find((folder) => folder.id === folderID);

    if (!copyTo.files) copyTo.files = [];
    copyTo.files.push(copyThis);
  }
};

const move = (fileID, folderID) => {
  const parent = folders.find((folder) => folder.id === parentFolderOf(fileID));

  if (parent) {
    const moveThis = parent.files.find((file) => file.id === fileID);
    const moveTo = folders.find((folder) => folder.id === folderID);

    remove(fileID); //dosyayı taşımadan önce bulunduğu diğer tüm klasörlerden silmek istedim

    if (!moveTo.files) moveTo.files = [];
    moveTo.files.push(moveThis);
  }
};

const folders = [
  {
    id: 5,
    name: "Klasör 1",
    files: [
      { id: 17, name: "profil.jpg" },
      { id: 18, name: "manzara.jpg" },
    ],
  },
  {
    id: 6,
    name: "Klasör 2",
    files: [
      { id: 21, name: "foto.png" },
      { id: 22, name: "dosya.xls" },
    ],
  },
  {
    id: 7,
    name: "Klasör 3",
  },
];

move(17,6) // dosyayı klasöre taşıyacak
copy(18,7) // kopyasını oluşturacak
remove(17) // dosyayı silecek
removeFolder(6) //klasörü ve altındaki tüm dosyaları silecek
parentFolderOf(17) // ==> 5
