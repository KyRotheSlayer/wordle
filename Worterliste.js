const Words = [ "Abwege", "Abwehr", "Abbild", "Ahnung", "Abflug", "Abgang", "Abfall", "Airbag", "Aktion", "Advent", "Altbau", 
    "Anlauf", "Arbeit", "Anteil", "Anhang", "Borste", "Bohrer", "Bonbon", "Bronze", "Daumen", "Dekade", "Dialog", 
    "Diesel", "Demenz", "Cabrio", "Chemie", "Camper", "Casino", "Effekt", "Erfolg", "Eichel", "Erwerb", "Ersatz", 
    "Einbau", "Epoche", "Erbgut", "Erdgas", "Etappe", "Fieber", "Farmer", "Finger", "Felgen", "Felsen", "Faktor", 
    "Fichte", "Fusion", "Frosch", "Ganove", "Garage", "Geduld", "Gefahr", "Gelenk", "Gehalt", "Genuss", "Geburt", 
    "Gebiss", "Ghetto", "Gitter", "Granit", "Geysir", "Gewinn", "Geweih", "Grotte", "Haufen", "Hawaii", "Himmel", 
    "Hirsch", "Hoheit", "Hektar", "Hopfen", "Hospiz", "Inhalt", "Ingwer", "Ironie", "Irrweg", "Imbiss", "Impuls", 
    "Junior", "Kammer", "Kanone", "Kadett", "Kaiser", "Jogurt", "Karies", "Kartei", "Klinik", "Kleber", "Kiefer", 
    "Kiesel", "Knecht", "Kirmes", "Kerker", "Konvoi", "Korken", "Kolben", "Kuchen", "Krater", "Kummer", "Kumpel", 
    "Konsum"
    ];
const date = new Date();
var seed = (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
var random = [];
for (let i = 0; i < 16; i++)
{
    seed = (seed * 9301 + 49297) % 10;
    random.push(seed); 
}
random = random.join('');
random = random % Words.length;