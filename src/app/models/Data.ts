export class Data {
  //attributs qu'on veut conserver
  //private : élément accessible seulement dans l'objet
  private _id: number;
  private _type: string;
  private _dataValue: number;
  private _dataDate: string;
  private _label: string;

  // bestSales!: [];

  constructor(
    id: number,
    type: string,
    dataValue: number,
    dataDate: string,
    label: string
  ) {
    //attributs qu'on veut conserver
    //private : élément accessible seulement dans l'objet
    this._id = id;
    this._type = type;
    this._dataValue = dataValue;
    this._dataDate = dataDate;
    this._label = label;
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter type
   * @return {string}
   */
  public get type(): string {
    return this._type;
  }

  /**
   * Getter dataValue
   * @return {number}
   */
  public get dataValue(): number {
    return this._dataValue;
  }

  /**
   * Getter dataDate
   * @return {string}
   */
  public get dataDate(): string {
    return this._dataDate;
  }

  public get label(): string {
    return this._label;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Setter type
   * @param {string} value
   */
  public set type(value: string) {
    this._type = value;
  }

  /**
   * Setter dataValue
   * @param {number} value
   */
  public set dataValue(value: number) {
    this._dataValue = value;
  }

  /**
   * Setter dataDate
   * @param {string} value
   */
  public set dataDate(value: string) {
    this._dataDate = value;
  }
  public set label(value: string) {
    this._label = value;
  }
}
