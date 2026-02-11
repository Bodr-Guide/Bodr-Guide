import { Country } from "./types";

// 모든 국가 JSON을 정적 import (Vercel 빌드 호환) — 195개국
import AD from "@/data/countries/AD.json";
import AE from "@/data/countries/AE.json";
import AG from "@/data/countries/AG.json";
import AL from "@/data/countries/AL.json";
import AM from "@/data/countries/AM.json";
import AO from "@/data/countries/AO.json";
import AR from "@/data/countries/AR.json";
import AT from "@/data/countries/AT.json";
import AU from "@/data/countries/AU.json";
import AZ from "@/data/countries/AZ.json";
import BA from "@/data/countries/BA.json";
import BB from "@/data/countries/BB.json";
import BD from "@/data/countries/BD.json";
import BE from "@/data/countries/BE.json";
import BF from "@/data/countries/BF.json";
import BG from "@/data/countries/BG.json";
import BH from "@/data/countries/BH.json";
import BI from "@/data/countries/BI.json";
import BJ from "@/data/countries/BJ.json";
import BN from "@/data/countries/BN.json";
import BO from "@/data/countries/BO.json";
import BR from "@/data/countries/BR.json";
import BS from "@/data/countries/BS.json";
import BT from "@/data/countries/BT.json";
import BW from "@/data/countries/BW.json";
import BY from "@/data/countries/BY.json";
import BZ from "@/data/countries/BZ.json";
import CA from "@/data/countries/CA.json";
import CD from "@/data/countries/CD.json";
import CF from "@/data/countries/CF.json";
import CG from "@/data/countries/CG.json";
import CH from "@/data/countries/CH.json";
import CI from "@/data/countries/CI.json";
import CL from "@/data/countries/CL.json";
import CM from "@/data/countries/CM.json";
import CN from "@/data/countries/CN.json";
import CO from "@/data/countries/CO.json";
import CR from "@/data/countries/CR.json";
import CU from "@/data/countries/CU.json";
import CV from "@/data/countries/CV.json";
import CY from "@/data/countries/CY.json";
import CZ from "@/data/countries/CZ.json";
import DE from "@/data/countries/DE.json";
import DJ from "@/data/countries/DJ.json";
import DK from "@/data/countries/DK.json";
import DM from "@/data/countries/DM.json";
import DO from "@/data/countries/DO.json";
import DZ from "@/data/countries/DZ.json";
import EC from "@/data/countries/EC.json";
import EE from "@/data/countries/EE.json";
import EG from "@/data/countries/EG.json";
import ER from "@/data/countries/ER.json";
import ES from "@/data/countries/ES.json";
import ET from "@/data/countries/ET.json";
import FI from "@/data/countries/FI.json";
import FJ from "@/data/countries/FJ.json";
import FM from "@/data/countries/FM.json";
import FR from "@/data/countries/FR.json";
import GA from "@/data/countries/GA.json";
import GB from "@/data/countries/GB.json";
import GD from "@/data/countries/GD.json";
import GE from "@/data/countries/GE.json";
import GH from "@/data/countries/GH.json";
import GM from "@/data/countries/GM.json";
import GN from "@/data/countries/GN.json";
import GQ from "@/data/countries/GQ.json";
import GR from "@/data/countries/GR.json";
import GT from "@/data/countries/GT.json";
import GU from "@/data/countries/GU.json";
import GW from "@/data/countries/GW.json";
import GY from "@/data/countries/GY.json";
import HK from "@/data/countries/HK.json";
import HN from "@/data/countries/HN.json";
import HR from "@/data/countries/HR.json";
import HT from "@/data/countries/HT.json";
import HU from "@/data/countries/HU.json";
import ID from "@/data/countries/ID.json";
import IE from "@/data/countries/IE.json";
import IL from "@/data/countries/IL.json";
import IN from "@/data/countries/IN.json";
import IQ from "@/data/countries/IQ.json";
import IR from "@/data/countries/IR.json";
import IS from "@/data/countries/IS.json";
import IT from "@/data/countries/IT.json";
import JM from "@/data/countries/JM.json";
import JO from "@/data/countries/JO.json";
import JP from "@/data/countries/JP.json";
import KE from "@/data/countries/KE.json";
import KG from "@/data/countries/KG.json";
import KH from "@/data/countries/KH.json";
import KI from "@/data/countries/KI.json";
import KM from "@/data/countries/KM.json";
import KN from "@/data/countries/KN.json";
import KW from "@/data/countries/KW.json";
import KZ from "@/data/countries/KZ.json";
import LA from "@/data/countries/LA.json";
import LB from "@/data/countries/LB.json";
import LC from "@/data/countries/LC.json";
import LI from "@/data/countries/LI.json";
import LK from "@/data/countries/LK.json";
import LR from "@/data/countries/LR.json";
import LS from "@/data/countries/LS.json";
import LT from "@/data/countries/LT.json";
import LU from "@/data/countries/LU.json";
import LV from "@/data/countries/LV.json";
import LY from "@/data/countries/LY.json";
import MA from "@/data/countries/MA.json";
import MC from "@/data/countries/MC.json";
import MD from "@/data/countries/MD.json";
import ME from "@/data/countries/ME.json";
import MG from "@/data/countries/MG.json";
import MH from "@/data/countries/MH.json";
import MK from "@/data/countries/MK.json";
import ML from "@/data/countries/ML.json";
import MM from "@/data/countries/MM.json";
import MN from "@/data/countries/MN.json";
import MO from "@/data/countries/MO.json";
import MR from "@/data/countries/MR.json";
import MT from "@/data/countries/MT.json";
import MU from "@/data/countries/MU.json";
import MV from "@/data/countries/MV.json";
import MW from "@/data/countries/MW.json";
import MX from "@/data/countries/MX.json";
import MY from "@/data/countries/MY.json";
import MZ from "@/data/countries/MZ.json";
import NA from "@/data/countries/NA.json";
import NC from "@/data/countries/NC.json";
import NE from "@/data/countries/NE.json";
import NG from "@/data/countries/NG.json";
import NI from "@/data/countries/NI.json";
import NL from "@/data/countries/NL.json";
import NO from "@/data/countries/NO.json";
import NP from "@/data/countries/NP.json";
import NR from "@/data/countries/NR.json";
import NZ from "@/data/countries/NZ.json";
import OM from "@/data/countries/OM.json";
import PA from "@/data/countries/PA.json";
import PE from "@/data/countries/PE.json";
import PF from "@/data/countries/PF.json";
import PG from "@/data/countries/PG.json";
import PH from "@/data/countries/PH.json";
import PK from "@/data/countries/PK.json";
import PL from "@/data/countries/PL.json";
import PT from "@/data/countries/PT.json";
import PW from "@/data/countries/PW.json";
import PY from "@/data/countries/PY.json";
import QA from "@/data/countries/QA.json";
import RO from "@/data/countries/RO.json";
import RS from "@/data/countries/RS.json";
import RU from "@/data/countries/RU.json";
import RW from "@/data/countries/RW.json";
import SA from "@/data/countries/SA.json";
import SB from "@/data/countries/SB.json";
import SC from "@/data/countries/SC.json";
import SD from "@/data/countries/SD.json";
import SE from "@/data/countries/SE.json";
import SG from "@/data/countries/SG.json";
import SI from "@/data/countries/SI.json";
import SK from "@/data/countries/SK.json";
import SL from "@/data/countries/SL.json";
import SM from "@/data/countries/SM.json";
import SN from "@/data/countries/SN.json";
import SO from "@/data/countries/SO.json";
import SR from "@/data/countries/SR.json";
import SS from "@/data/countries/SS.json";
import ST from "@/data/countries/ST.json";
import SV from "@/data/countries/SV.json";
import SZ from "@/data/countries/SZ.json";
import TD from "@/data/countries/TD.json";
import TG from "@/data/countries/TG.json";
import TH from "@/data/countries/TH.json";
import TJ from "@/data/countries/TJ.json";
import TL from "@/data/countries/TL.json";
import TN from "@/data/countries/TN.json";
import TO from "@/data/countries/TO.json";
import TR from "@/data/countries/TR.json";
import TT from "@/data/countries/TT.json";
import TV from "@/data/countries/TV.json";
import TW from "@/data/countries/TW.json";
import TZ from "@/data/countries/TZ.json";
import UA from "@/data/countries/UA.json";
import UG from "@/data/countries/UG.json";
import US from "@/data/countries/US.json";
import UY from "@/data/countries/UY.json";
import UZ from "@/data/countries/UZ.json";
import VA from "@/data/countries/VA.json";
import VC from "@/data/countries/VC.json";
import VE from "@/data/countries/VE.json";
import VN from "@/data/countries/VN.json";
import VU from "@/data/countries/VU.json";
import WS from "@/data/countries/WS.json";
import XK from "@/data/countries/XK.json";
import ZA from "@/data/countries/ZA.json";
import ZM from "@/data/countries/ZM.json";
import ZW from "@/data/countries/ZW.json";

// 전체 국가 데이터 배열 (195개국)
const ALL_COUNTRIES: Country[] = [
  AD, AE, AG, AL, AM, AO, AR, AT, AU, AZ,
  BA, BB, BD, BE, BF, BG, BH, BI, BJ, BN, BO, BR, BS, BT, BW, BY, BZ,
  CA, CD, CF, CG, CH, CI, CL, CM, CN, CO, CR, CU, CV, CY, CZ,
  DE, DJ, DK, DM, DO, DZ,
  EC, EE, EG, ER, ES, ET,
  FI, FJ, FM, FR,
  GA, GB, GD, GE, GH, GM, GN, GQ, GR, GT, GU, GW, GY,
  HK, HN, HR, HT, HU,
  ID, IE, IL, IN, IQ, IR, IS, IT,
  JM, JO, JP,
  KE, KG, KH, KI, KM, KN, KW, KZ,
  LA, LB, LC, LI, LK, LR, LS, LT, LU, LV, LY,
  MA, MC, MD, ME, MG, MH, MK, ML, MM, MN, MO, MR, MT, MU, MV, MW, MX, MY, MZ,
  NA, NC, NE, NG, NI, NL, NO, NP, NR, NZ,
  OM,
  PA, PE, PF, PG, PH, PK, PL, PT, PW, PY,
  QA,
  RO, RS, RU, RW,
  SA, SB, SC, SD, SE, SG, SI, SK, SL, SM, SN, SO, SR, SS, ST, SV, SZ,
  TD, TG, TH, TJ, TL, TN, TO, TR, TT, TV, TW, TZ,
  UA, UG, US, UY, UZ,
  VA, VC, VE, VN, VU,
  WS, XK,
  ZA, ZM, ZW,
] as Country[];

// 모든 국가 데이터를 가져옴 (한국어 이름순 정렬)
export function getAllCountries(): Country[] {
  return [...ALL_COUNTRIES].sort((a, b) =>
    a.nameKo.localeCompare(b.nameKo, "ko")
  );
}

// ID로 특정 국가 데이터를 가져옴
export function getCountryById(id: string): Country | null {
  return ALL_COUNTRIES.find((c) => c.id === id) ?? null;
}

// 대륙별 국가 목록 필터링
export function getCountriesByContinent(continent: string): Country[] {
  return getAllCountries().filter((c) => c.continent === continent);
}

// 국가 이름(한국어/영어) 검색
export function searchCountries(query: string): Country[] {
  const q = query.toLowerCase();
  return getAllCountries().filter(
    (c) => c.nameKo.includes(q) || c.nameEn.toLowerCase().includes(q)
  );
}
