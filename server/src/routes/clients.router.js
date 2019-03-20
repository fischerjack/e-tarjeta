const Router = require("express").Router;
const clientsRouter = Router();

const TYPES = {
  RADIO: "RADIO",
  BOOLEAN: "BOOLEAN",
  TEXT: "TEXT",
  TEXTAREA: "TEXTAREA",
  DATE: "DATE"
};

const QUESTIONS_LIST = [
  {
    id: "",
    type: TYPES.TEXT,
    question: "NOMBRE",
    answer: ""
  },
  {
    id: "",
    type: TYPES.TEXT,
    question: "APELLIDO",
    answer: ""
  },
  {
    id: "",
    type: TYPES.TEXT,
    question: "DOMICILIO",
    answer: ""
  },
  {
    id: "",
    type: TYPES.TEXT,
    question: "LOCALIDAD",
    answer: ""
  },
  {
    id: "",
    type: TYPES.TEXT,
    question: "TELEFONO",
    answer: ""
  },
  {
    id: "",
    type: TYPES.DATE,
    question: "FECHA DE NACIMIENTO",
    answer: ""
  },
  {
    id: "",
    type: TYPES.RADIO,
    question: "ETNIA",
    answer: ["BLANCA, INDIGENA, MESTIZA, NEGRA, OTRA"]
  },
  {
    id: "",
    type: TYPES.BOOLEAN,
    question: "ALFA BETA",
    answer: ""
  },
  {
    id: "",
    type: TYPES.RADIO,
    question: "ESTUDIOS",
    answer: ["NINGUNO, PRIMARIA, SECUNDA, UNIVERSIDAD"]
  },
  {
    id: "",
    type: TYPES.RADIO,
    question: "ESTADO CIVIL",
    answer: ["CASADA", "UNION ESTABLE", "SOLTERA", "OTRO"]
  },
  {
    id: "",
    type: TYPES.BOOLEAN,
    question: "VIVE SOLA",
    answer: ""
  },
  {
    id: "",
    type: TYPES.TEXT,
    question: "LUGAR DEL CONTROL PRENATAL",
    answer: ""
  },
  {
    id: "",
    type: TYPES.TEXT,
    question: "LUGAR DEL PARTO",
    answer: ""
  },
  {
    id: "",
    type: TYPES.TEXT,
    question: "NOMBRE IDENTIDAD",
    answer: ""
  },
  {
    id: "",
    type: TYPES.BOOLEAN,
    question: "FAMILIARES - TBC",
    answer: ""
  },
  {
    id: "",
    type: TYPES.BOOLEAN,
    question: "FAMILIARES - DIABETES",
    answer: ""
  },
  {
    id: "",
    type: TYPES.BOOLEAN,
    question: "FAMILIARES - HIPERTENSION",
    answer: ""
  },
  {
    id: "",
    type: TYPES.BOOLEAN,
    question: "FAMILIARES - PREECLAMPSIA",
    answer: ""
  },
  {
    id: "",
    type: TYPES.BOOLEAN,
    question: "FAMILIARES - ECLAMPSIA",
    answer: ""
  },
  {
    id: "",
    type: TYPES.BOOLEAN,
    type: "BOOLEAN",
    question: "FAMILIARES - OTRA CONDICION MEDICA GRAVE",
    answer: ""
  },
  {
    id: "",
    type: TYPES.BOOLEAN,
    type: "BOOLEAN",
    question: "PERSONALES - TBC",
    answer: ""
  },
  {
    id: "",
    type: TYPES.BOOLEAN,
    question: "PERSONALES - DIABETES",
    answer: ""
  },
  {
    id: "",
    type: TYPES.BOOLEAN,
    question: "PERSONALES - HIPERTENSION",
    answer: ""
  },
  {
    id: "",
    type: TYPES.BOOLEAN,
    question: "PERSONALES - PREECLAMPSIA",
    answer: ""
  },
  {
    id: "",
    type: TYPES.BOOLEAN,
    question: "PERSONALES - ECLAMPSIA",
    answer: ""
  },
  {
    id: "",
    type: TYPES.BOOLEAN,
    question: "PERSONALES - OTRA CONDICION MEDICA GRAVE",
    answer: ""
  },
  {
    id: "",
    type: TYPES.BOOLEAN,
    question: "PERSONALES - CIRUGIA GENITO-URINARIA",
    answer: ""
  },
  {
    id: "",
    type: TYPES.BOOLEAN,
    question: "PERSONALES - INFERTILIDAD",
    answer: ""
  },
  {
    id: "",
    type: TYPES.BOOLEAN,
    question: "PERSONALES - CARDIOPEL.",
    answer: ""
  },
  {
    id: "",
    type: TYPES.BOOLEAN,
    question: "PERSONALES - NEFROPATIA",
    answer: ""
  },
  {
    id: "",
    type: TYPES.BOOLEAN,
    question: "PERSONALES - VIOLENCIA",
    answer: ""
  },
  {
    id: "",
    type: TYPES.TEXT,
    question: "OBSTETRICOS - GESTAS PREVIAS",
    answer: ""
  },
  {
    id: "",
    type: TYPES.TEXT,
    question: "OBSTETRICOS - ABORTOS",
    answer: ""
  },
  {
    id: "",
    type: TYPES.BOOLEAN,
    question: "OBSTETRICOS - ABORTOS - 3 ESPONT. CONSECUTIVOS",
    answer: ""
  },
  {
    id: "",
    type: TYPES.TEXT,
    question: "OBSTETRICOS - PARTOS",
    answer: ""
  },
  {
    id: "",
    type: TYPES.RADIO,
    question: "OBSTETRICOS - PARTOS - ULTIMO PREVIO",
    answer: ["n/c", "normal", "<2500g", ">4000g"]
  },
  {
    id: "",
    type: TYPES.BOOLEAN,
    question: "OBSTETRICOS - PARTOS - ANTECEDENTE DE GEMELARES",
    answer: ""
  },
  {
    id: "",
    type: TYPES.TEXT,
    question: "OBSTETRICOS - PARTOS - VAGINALES",
    answer: ""
  },
  {
    id: "",
    type: TYPES.TEXT,
    question: "OBSTETRICOS - PARTOS - CESAREAS",
    answer: ""
  },
  {
    id: "",
    type: TYPES.TEXT,
    question: "OBSTETRICOS - NACIDOS MUERTOS",
    answer: ""
  },
  {
    id: "",
    type: TYPES.TEXT,
    question: "OBSTETRICOS - NACIDOS VIVOS",
    answer: ""
  },
  {
    id: "",
    type: TYPES.TEXT,
    question: "OBSTETRICOS - MUERTOS PRIMERA SEMANA",
    answer: ""
  },
  {
    id: "",
    type: TYPES.TEXT,
    question: "OBSTETRICOS - MUERTOS DESPUES PRIMERA SEMANA",
    answer: ""
  },
  {
    id: "",
    type: TYPES.TEXT,
    question: "OBSTETRICOS - VIVEN",
    answer: ""
  }
];

/**
 *
 * Sends list of registration questions
 * that will populate the form on the
 * client.
 *
 */
clientsRouter.get("/new", (req, res, next) => {
    res.json({types: TYPES, questions: QUESTIONS_LIST});
    res.end();
});

module.exports = clientsRouter;
