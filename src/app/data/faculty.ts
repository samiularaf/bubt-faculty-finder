export interface Faculty {
  id: number;
  name: string;
  code: string;
  designation: string;
  phone: string;
  email: string;
  room: string;
  dept: string;
}

export const facultyList: Faculty[] = [
  { id: 1, name: "Prof. Dr. Md. Ahsan Habib", code: "MAHB", designation: "Professor & Chairman, Dept. of CSE", phone: "01748929720", email: "mahabib@bubt.edu.bd", room: "1-308", dept: "CSE" },
  { id: 2, name: "Dr. Khandoker Nadim Parvez", code: "KNP", designation: "Associate Professor of CSE", phone: "01732345087", email: "nadimparvez@gmail.com", room: "3-503", dept: "CSE" },
  { id: 3, name: "Dr. Md. Rajibul Islam", code: "DMRI", designation: "Associate Professor of CSE", phone: "01345775443", email: "md.rajibul.islam@bubt.edu.bd", room: "4-103", dept: "CSE" },
  { id: 4, name: "Dr. Muhammad Aminur Rahaman", code: "DMAR", designation: "Associate Professor of CSE", phone: "01716539541", email: "aminur@bubt.edu.bd", room: "1-205", dept: "CSE" },
  { id: 5, name: "Md. Saifur Rahman", code: "SR", designation: "Assistant Professor of CSE", phone: "01819190259", email: "saifurs@bubt.edu.bd", room: "2-421", dept: "CSE" },
  { id: 6, name: "Md. Mijanur Rahman", code: "MRN", designation: "Assistant Professor of CSE", phone: "01307109753", email: "riponcse.it@bubt.edu.bd", room: "2-421", dept: "CSE" },
  { id: 7, name: "Md. Shahiduzzaman", code: "MSZ", designation: "Assistant Professor of CSE", phone: "01912949426", email: "shahid@bubt.edu.bd", room: "2-321", dept: "CSE" },
  { id: 8, name: "Ms. Sabiha Firdaus", code: "SF", designation: "Assistant Professor of CSE", phone: "01642091837", email: "sabiha@bubt.edu.bd", room: "1-312", dept: "CSE" },
  { id: 9, name: "Shamim Ahmed", code: "SAM", designation: "Assistant Professor of CSE", phone: "01672917779", email: "shamim.a@bubt.edu.bd", room: "1-314", dept: "CSE" },
  { id: 10, name: "T.M. Amir-Ul Haque Bhuiyan", code: "TAB", designation: "Assistant Professor of CSE", phone: "01732802625", email: "amir@bubt.edu.bd", room: "2-321", dept: "CSE" },
  { id: 11, name: "Md. Masudul Islam", code: "MDI", designation: "Assistant Professor of CSE", phone: "01671118854", email: "masud@bubt.edu.bd", room: "2-421", dept: "CSE" },
  { id: 12, name: "Md. Ashraful Islam", code: "MAFI", designation: "Assistant Professor of CSE", phone: "01723777711", email: "ashraful@bubt.edu.bd", room: "1-314", dept: "CSE" },
  { id: 13, name: "Fahima Khanam", code: "FK", designation: "Assistant Professor of CSE", phone: "01686661369", email: "fahima@bubt.edu.bd", room: "1-310", dept: "CSE" },
  { id: 14, name: "Ali Azgar", code: "AAG", designation: "Assistant Professor of CSE", phone: "01771932324", email: "azgar@bubt.edu.bd", room: "2-321", dept: "CSE" },
  { id: 15, name: "Md. Saddam Hossain", code: "SDH", designation: "Assistant Professor of CSE", phone: "01781076146", email: "mhossain@bubt.edu.bd", room: "3-502", dept: "CSE" },
  { id: 16, name: "Humayra Ahmed", code: "HA", designation: "Assistant Professor of CSE", phone: "01795556862", email: "humayra_ahmed@bubt.edu.bd", room: "1-312", dept: "CSE" },
  { id: 17, name: "Md. Mamun Hossain", code: "MMH", designation: "Assistant Professor of CSE", phone: "01722733907", email: "mamun.h@bubt.edu.bd", room: "1-314", dept: "CSE" },
  { id: 18, name: "Md. Ashiqur Rahman", code: "AR", designation: "Assistant Professor of CSE", phone: "01621410068", email: "ashiqur@bubt.edu.bd", room: "1-314", dept: "CSE" },
  { id: 19, name: "Sadah Anjum Shanto", code: "SAS", designation: "Assistant Professor of CSE", phone: "01674533198", email: "sshanto@bubt.edu.bd", room: "1-312", dept: "CSE" },
  { id: 20, name: "Sudipto Chaki", code: "SCK", designation: "Assistant Professor of CSE", phone: "01750742782", email: "sudipto@bubt.edu.bd", room: "1-314", dept: "CSE" },
  { id: 21, name: "Md. Mahbub-Or-Rashid", code: "MBR", designation: "Assistant Professor of CSE", phone: "01746813078", email: "mahbub@bubt.edu.bd", room: "3-502", dept: "CSE" },
  { id: 22, name: "Most. Jannatul Ferdous", code: "MJF", designation: "Assistant Professor of CSE", phone: "01723586258", email: "jannatul_ferdous@bubt.edu.bd", room: "1-303", dept: "CSE" },
  { id: 23, name: "Iffat Tamanna", code: "IFT", designation: "Assistant Professor of CSE", phone: "01717745013", email: "iffat@bubt.edu.bd", room: "1-310", dept: "CSE" },
  { id: 24, name: "Itisha Nowrin", code: "IN", designation: "Assistant Professor of CSE", phone: "01769345188", email: "itisha@bubt.edu.bd", room: "1-303", dept: "CSE" },
  { id: 25, name: "Farha Akhter Munmun", code: "FAM", designation: "Assistant Professor of CSE", phone: "01707028634", email: "farha.akter@bubt.edu.bd", room: "1-310", dept: "CSE" },
  { id: 26, name: "Meher Afroj", code: "MAJ", designation: "Assistant Professor of CSE", phone: "01676975618", email: "meher_afroj@bubt.edu.bd", room: "1-303", dept: "CSE" },
  { id: 27, name: "Sondip Poul Singh", code: "SPS", designation: "Assistant Professor of CSE", phone: "01789350125", email: "sondipsingha@bubt.edu.bd", room: "2-911", dept: "CSE" },
  { id: 28, name: "Ahmed Shafkat", code: "ASK", designation: "Assistant Professor of CSE", phone: "01711871723", email: "ahmedshafkat@bubt.edu.bd", room: "3-407", dept: "CSE" },
  { id: 29, name: "Sweety Lima", code: "SWL", designation: "Assistant Professor of CSE", phone: "01998633865", email: "sweeity65@bubt.edu.bd", room: "1-310", dept: "CSE" },
  { id: 30, name: "Nasirul Mumenin", code: "NMM", designation: "Assistant Professor of CSE", phone: "01678646464", email: "nasirul@bubt.edu.bd", room: "2-911", dept: "CSE" },
  { id: 31, name: "Tasniah Mohiuddin", code: "TMM", designation: "Assistant Professor of CSE", phone: "01558033074", email: "tasniah@bubt.edu.bd", room: "1-310", dept: "CSE" },
  { id: 32, name: "Sworna Akter", code: "SRA", designation: "Assistant Professor of CSE", phone: "01319332516", email: "sworna@bubt.edu.bd", room: "1-303", dept: "CSE" },
  { id: 33, name: "A. S. M. Shafi", code: "ASMS", designation: "Assistant Professor of CSE", phone: "01763955255", email: "asmshafi@bubt.edu.bd", room: "2-911", dept: "CSE" },
  { id: 34, name: "Nourin Khandaker", code: "NKD", designation: "Lecturer in CSE", phone: "01521255145", email: "nourin_khandaker@bubt.edu.bd", room: "1-303", dept: "CSE" },
  { id: 35, name: "Humayra Ferdous", code: "HMF", designation: "Lecturer in CSE", phone: "01751948092", email: "humayra@bubt.edu.bd", room: "1-303", dept: "CSE" },
  { id: 36, name: "Ashfia Jannat Keya", code: "AJK", designation: "Lecturer in CSE", phone: "01931560203", email: "ashfiaj@bubt.edu.bd", room: "1-303", dept: "CSE" },
  { id: 37, name: "Anusha Aziz", code: "ANAZ", designation: "Lecturer in CSE", phone: "01612722623", email: "anusha@bubt.edu.bd", room: "1-310", dept: "CSE" },
  { id: 38, name: "Sumona Yeasmin", code: "SMY", designation: "Lecturer in CSE", phone: "01992616930", email: "sumona@bubt.edu.bd", room: "1-303", dept: "CSE" },
  { id: 39, name: "Maruf Billah", code: "MRB", designation: "Lecturer in CSE", phone: "01932087442", email: "marufbillah@bubt.edu.bd", room: "1-310", dept: "CSE" },
  { id: 40, name: "Nusrat Sultana", code: "NUS", designation: "Lecturer in CSE", phone: "01992927637", email: "nusratsultana@bubt.edu.bd", room: "1-303", dept: "CSE" },
  { id: 41, name: "Mishal Al Rahman", code: "MARH", designation: "Lecturer in CSE", phone: "01621477868", email: "mishalalrahman@bubt.edu.bd", room: "3-407", dept: "CSE" },
  { id: 42, name: "Bijon Mallik", code: "BJM", designation: "Lecturer in CSE", phone: "01784595423", email: "bijon@bubt.edu.bd", room: "3-407", dept: "CSE" },
  { id: 43, name: "M.A. Nur Quraishi", code: "MANQ", designation: "Lecturer in CSE", phone: "01733999551", email: "nurquraishi@bubt.edu.bd", room: "3-407", dept: "CSE" },
  { id: 44, name: "Hasibul Hossain Shajeeb", code: "HHS", designation: "Lecturer in CSE", phone: "01966901950", email: "shajeeb@bubt.edu.bd", room: "1-314", dept: "CSE" },
  { id: 45, name: "Sayefa Arafah", code: "SAFA", designation: "Lecturer in CSE", phone: "01799411190", email: "sayefaarafah@bubt.edu.bd", room: "1-602", dept: "CSE" },
  { id: 46, name: "Fawzia Fairooz", code: "FFR", designation: "Lecturer in CSE", phone: "01600961809", email: "fawziafairooz@bubt.edu.bd", room: "1-602", dept: "CSE" },
  { id: 47, name: "Adnan Sakib", code: "ADSK", designation: "Lecturer in CSE", phone: "01861588196", email: "adnansakib@bubt.edu.bd", room: "2-911", dept: "CSE" },
  { id: 48, name: "Mastura Sadaf", code: "MSF", designation: "Lecturer in CSE", phone: "01799796344", email: "sadafmastura@bubt.edu.bd", room: "1-602", dept: "CSE" },
  { id: 49, name: "Nilanjana Basak", code: "NIB", designation: "Lecturer in CSE", phone: "01799493123", email: "nilanjanabasak@bubt.edu.bd", room: "1-602", dept: "CSE" },
  { id: 50, name: "Nasrin Akter (Shipa)", code: "NAA", designation: "Lecturer in CSE", phone: "01984712858", email: "nasrinshipa@bubt.edu.bd", room: "1-602", dept: "CSE" },
  { id: 51, name: "Jakia Akhter", code: "JAK", designation: "Lecturer in CSE", phone: "01760276695", email: "jakia.akhter@bubt.edu.bd", room: "1-602", dept: "CSE" },
  { id: 52, name: "Sumit Alam Khan", code: "SUM", designation: "Lecturer in CSE", phone: "01760536102", email: "sumitalam@bubt.edu.bd", room: "3-508", dept: "CSE" },
  { id: 53, name: "Zobaer Al Khalil Zihad", code: "ZAK", designation: "Lecturer in CSE", phone: "01303811482", email: "zobaerzihad@bubt.edu.bd", room: "3-503", dept: "CSE" },
  { id: 54, name: "Maharin Afroj", code: "MJ", designation: "Lecturer in CSE", phone: "01948503002", email: "maharinshova@gmail.com", room: "1-602", dept: "CSE" },
  { id: 55, name: "Shampa Banik", code: "SHB", designation: "Lecturer in CSE", phone: "01746449766", email: "shampabanik@bubt.edu.bd", room: "1-602", dept: "CSE" },
  { id: 56, name: "Sumaiya Binte Shahid", code: "SBSH", designation: "Lecturer in CSE", phone: "01834548479", email: "sbinteshahid@bubt.edu.bd", room: "1-602", dept: "CSE" },
  { id: 57, name: "Mohtasim Fuad", code: "MF", designation: "Lecturer in CSE", phone: "01676204142", email: "mohtasimfuad@bubt.edu.bd", room: "3-408", dept: "CSE" },
  { id: 58, name: "Nahida Akter Tanjila", code: "NAT", designation: "Lecturer in CSE", phone: "01749450658", email: "nahidaaktertanjila@bubt.edu.bd", room: "3-508", dept: "CSE" },
  { id: 59, name: "Samiul Basir", code: "MSBR", designation: "Lecturer in CSE", phone: "01773238565", email: "samiulbasir@bubt.edu.bd", room: "2-911", dept: "CSE" },
  { id: 60, name: "Md. Humayan Kabir Rupok", code: "HKR", designation: "Lecturer in CSE", phone: "01721019298", email: "humayankabir@bubt.edu.bd", room: "1-602", dept: "CSE" },
  { id: 61, name: "Md. Nahid Hossain", code: "NHN", designation: "Lecturer in CSE", phone: "01750800447", email: "nahid.hossain@bubt.edu.bd", room: "2-911", dept: "CSE" },
  { id: 62, name: "Syem Aziz", code: "SYZ", designation: "Lecturer in CSE", phone: "01979289175", email: "syemaziz@bubt.edu.bd", room: "1-602", dept: "CSE" },
  { id: 63, name: "Laila Binte Mustafiz", code: "LBM", designation: "Lecturer in CSE", phone: "01753015456", email: "laila@bubt.edu.bd", room: "3-407", dept: "CSE" },
  { id: 64, name: "Talimul Bari Shreshtho", code: "TABS", designation: "Lecturer in CSE", phone: "01722314456", email: "talimulbari@bubt.edu.bd", room: "3-508", dept: "CSE" },
  { id: 65, name: "Rubaiya Reza Sohana", code: "RRSA", designation: "Lecturer in CSE", phone: "01777988261", email: "rubaiyarezasohana@bubt.edu.bd", room: "3-408", dept: "CSE" },
  { id: 66, name: "Sudipa Saha", code: "SSD", designation: "Lecturer in CSE", phone: "01853443153", email: "sudipa.saha@bubt.edu.bd", room: "1-602", dept: "CSE" },
  { id: 67, name: "Sudipto Ghosh", code: "SG", designation: "Lecturer in CSE", phone: "01581413109", email: "sudiptoghosh@bubt.edu.bd", room: "3-503", dept: "CSE" },
  { id: 68, name: "Ashifur Rahman", code: "ASR", designation: "Lecturer in CSE", phone: "01925221970", email: "ashifurrahman@bubt.edu.bd", room: "3-502", dept: "CSE" },
  { id: 69, name: "Mushfiqur Rahman", code: "MRG", designation: "Lecturer in CSE", phone: "01718142322", email: "mushfiqur.rahman@bubt.edu.bd", room: "3-502", dept: "CSE" },
  { id: 70, name: "Tanzina Tazreen Meem", code: "TEM", designation: "Lecturer in CSE", phone: "01628820883", email: "tanzinameem@bubt.edu.bd", room: "1-310", dept: "CSE" },
  { id: 71, name: "Mahbuba Habib", code: "MHB", designation: "Lecturer in CSE", phone: "01943937566", email: "mahbuba.habib@bubt.edu.bd", room: "1-602", dept: "CSE" },
  { id: 72, name: "Shaila Shaznin", code: "SSN", designation: "Lecturer in CSE", phone: "01521566840", email: "shailashaznin@bubt.edu.bd", room: "1-602", dept: "CSE" },
  { id: 73, name: "Nasrin Akter", code: "NASR", designation: "Lecturer in CSE", phone: "01837287715", email: "nasrin.akter@bubt.edu.bd", room: "1-602", dept: "CSE" },
  { id: 74, name: "Rajorshi Bhattacharya", code: "RBH", designation: "Lecturer in CSE", phone: "01756019060", email: "rajorshi368@gmail.com", room: "3-408", dept: "CSE" },
  { id: 75, name: "Sourav Kundu", code: "SKD", designation: "Lecturer in CSE", phone: "01639881090", email: "souravkundu@bubt.edu.bd", room: "3-408", dept: "CSE" },
  { id: 76, name: "Shrabani Das", code: "SHD", designation: "Lecturer in CSE", phone: "01721510808", email: "shrabanidas99.cse@gmail.com", room: "3-408", dept: "CSE" },
  { id: 77, name: "Mst. Aklima Khatun Akhi", code: "AKHA", designation: "Lecturer in CSE", phone: "01796151768", email: "aklimakhatun@gmail.com", room: "1-310", dept: "CSE" },
  { id: 78, name: "Rakib Mahmud", code: "RAMA", designation: "Lecturer in CSE", phone: "01318432707", email: "rakib777bd@gmail.com", room: "3-407", dept: "CSE" },
  { id: 79, name: "Jannatul Ferdous Mirza", code: "JFM", designation: "Lecturer in CSE", phone: "01531531367", email: "jfmirza1303@gmail.com", room: "1-303", dept: "CSE" },
  { id: 80, name: "Iffat Ara Sanzida", code: "IAS", designation: "Lecturer in CSE", phone: "01759958460", email: "jucse28.344@gmail.com", room: "3-408", dept: "CSE" },
  { id: 81, name: "Shuvo Biswas", code: "SBI", designation: "Lecturer in CSE", phone: "01921832512", email: "shuvo.ict13@gmail.com", room: "3-407", dept: "CSE" },
  { id: 82, name: "Md. Shadman Sakib", code: "MDSS", designation: "Lecturer in CSE", phone: "01521470453", email: "shadman.shovik@gmail.com", room: "1-602", dept: "CSE" },
  { id: 83, name: "Md. Amirul Hasan Shanto", code: "AHS", designation: "Lecturer in CSE", phone: "01988020709", email: "shantoict27@gmail.com", room: "3-508", dept: "CSE" },
  { id: 84, name: "Shefayatuj Johara Chowdhury", code: "SJC", designation: "Lecturer in CSE", phone: "01984696037", email: "shefaya61@gmail.com", room: "3-408", dept: "CSE" },
  { id: 85, name: "Muhammad Mahbub Sarwar Shafi", code: "MMSS", designation: "Lecturer in CSE", phone: "01820909803", email: "mahbubsarwar5@gmail.com", room: "1-602", dept: "CSE" },
  { id: 86, name: "Fahim Morshed", code: "FMO", designation: "Lecturer in CSE", phone: "01777625276", email: "f.morshed.opce@gmail.com", room: "1-602", dept: "CSE" },
  { id: 87, name: "Md. Rakibul Islam", code: "RAIS", designation: "Lecturer in CSE", phone: "01609031299", email: "rakibuliuict@gmail.com", room: "2-911", dept: "CSE" },
  { id: 88, name: "Fateha Jannat Ayrin", code: "FJA", designation: "Lecturer in CSE", phone: "01616247349", email: "fjayrin@gmail.com", room: "1-602", dept: "CSE" },
  { id: 89, name: "Tahmid Hasan", code: "TAHH", designation: "Lecturer in CSE", phone: "01681827733", email: "tahmidahasan.cse@gmail.com", room: "1-602", dept: "CSE" },
  { id: 90, name: "Nusrat Kaniz Khan", code: "NUKK", designation: "Lecturer in CSE", phone: "01518917708", email: "nusrat.kaniz@bubt.edu.bd", room: "1-303", dept: "CSE" },
  { id: 91, name: "Jahid Tanvir", code: "JT", designation: "Lecturer in CSE", phone: "01940098041", email: "jahidtanvir.ict@gmail.com", room: "1-602", dept: "CSE" },
  { id: 92, name: "Jubayer Ahmed Bhuiyan Shawon", code: "JABS", designation: "Lecturer in CSE", phone: "01972947048", email: "shawon01821@gmail.com", room: "1-602", dept: "CSE" },
  { id: 93, name: "Saimoon Al Farshi Oman", code: "SAFO", designation: "Lecturer in CSE", phone: "01926849331", email: "saimoon.oman@gmail.com", room: "B-4/1", dept: "CSE" },
  { id: 94, name: "Md. Shakil Ahmed", code: "MDSHA", designation: "Lecturer in CSE", phone: "01764808404", email: "shakil.stu2018@juniv.edu", room: "1-602", dept: "CSE" },
  { id: 95, name: "Ankan Saha", code: "ANSA", designation: "Lecturer in CSE", phone: "01537564558", email: "ankansaha314159@gmail.com", room: "1-602", dept: "CSE" },
  { id: 96, name: "Fahmida Ahmed", code: "FAH", designation: "Lecturer in CSE", phone: "01780061383", email: "ittyfahmida@bubt.edu.bd", room: "1-602", dept: "CSE" },
];

export function searchFaculty(query: string): Faculty[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase().trim();
  return facultyList.filter(f =>
    f.code.toLowerCase().includes(q) ||
    f.name.toLowerCase().includes(q) ||
    f.designation.toLowerCase().includes(q)
  );
}

export function getFacultyByCode(code: string): Faculty | undefined {
  return facultyList.find(f => f.code.toLowerCase() === code.toLowerCase());
}

export const featuredCodes = ["TEM", "RRSA", "MAJ", "MDI", "MAHB", "DMAR", "SR", "SAM"];
