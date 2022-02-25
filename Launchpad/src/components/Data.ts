export class Data{
  private instrumentSelected : string;

  constructor(){
    this.instrumentSelected="";
  }

  getInstrumentSelected(){
    return this.instrumentSelected;
  }

  setInstrumentSelected(instrument : string){
    this.instrumentSelected = instrument;
  }

  reset(){
    this.instrumentSelected="";
  }
}
