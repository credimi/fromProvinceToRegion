import { Region, Province } from './types'

export const fromProvinceToRegion = (province: Province): Region => {
  switch (province) {
    case "AQ":
    case "CH":
    case "PE":
    case "TE":
      return 'Abruzzo'

    case "MT":
    case "PZ":
      return 'Basilicata'

    case "CS":
    case "CZ":
    case "KR":
    case "RC":
    case "VV":
      return "Calabria"

    case "AV":
    case "BN":
    case "CE":
    case "NA":
    case "SA":
      return "Campania"

    case "BO":
    case "FC":
    case "FE":
    case "MO":
    case "PC":
    case "PR":
    case "RA":
    case "RE":
    case "RN":
      return "Emilia Romagna"

    case "GO":
    case "PN":
    case "TS":
    case "UD":
      return "Friuli Venezia Giulia"

    case "VT":
    case "FR":
    case "LT":
    case "RI":
    case "RM":
      return "Lazio"

    case "GE":
    case "IM":
    case "SP":
    case "SV":
      return "Liguria"

    case "BG":
    case "BS":
    case "CO":
    case "CR":
    case "LC":
    case "LO":
    case "MB":
    case "MI":
    case "MN":
    case "PV":
    case "SO":
    case "VA":
      return "Lombardia"

    case "AN":
    case "AP":
    case "FM":
    case "MC":
    case "PU":
    case "PS":
      return "Marche"

    case "CB":
    case "IS":
      return "Molise"

    case "AL":
    case "AT":
    case "BI":
    case "CN":
    case "NO":
    case "TO":
    case "VB":
    case "VC":
      return "Piemonte"

    case "BA":
    case "BR":
    case "BT":
    case "FG":
    case "LE":
    case "TA":
      return "Puglia"

    case "CI":
    case "OG":
    case "OT":
    case "VS":
    case "CA":
    case "NU":
    case "OR":
    case "SS":
      return "Sardegna"

    case "AG":
    case "CL":
    case "CT":
    case "EN":
    case "ME":
    case "PA":
    case "RG":
    case "SR":
    case "TP":
      return "Sicilia"

    case "AR":
    case "FI":
    case "GR":
    case "LI":
    case "LU":
    case "MS":
    case "PI":
    case "PO":
    case "PT":
    case "SI":
      return "Toscana"

    case "BZ":
    case "TN":
      return "Trentino Alto Adige"

    case "PG":
    case "TR":
      return "Umbria"

    case "AO":
      return "Valle d'Aosta"

    case "BL":
    case "PD":
    case "RO":
    case "TV":
    case "VE":
    case "VI":
    case "VR":
      return "Veneto"
  }
}

export { Region, Province }
