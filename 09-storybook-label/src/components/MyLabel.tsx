import "./mylabel.css";

type Sizes = "normal" | "h1" | "h2" | "h3";
type Color = "primary" | "secondary" | "tertiary";

export interface MyLabelProps {
   /**
   * Texto del botón
   */
    label: string;
   /**
   * Tamaño del texto del botón
   */
    size: Sizes;
     /**
   * Capitalizado o no
   */
    allCaps:boolean;
    /** 
     * Color básico del botón.
     * */
    color:Color;
     /** 
     * Color en hexadecimal
     * */
    fontColor?:string;
}

export const MyLabel = ({
    allCaps = false,
    color = "primary",
    label = "No label",
    size = "normal",
    fontColor
 }:MyLabelProps) => {
  return (
    <span 
    className={`label ${size} text-${color}`}
    style={{color:fontColor}}>{allCaps ? label.toUpperCase() : label }</span>
  )
}
