import { motion, type MotionProps } from "framer-motion";
import {
  type ElementType, // Tipo para el componente que se va a renderizar
  type ComponentPropsWithoutRef, // Extraemos las props de un componente sin ref para no interferir con la ref de motion
  type ReactNode, // Tipo para children
  useMemo,
} from "react";

type MotionElementProps<Component extends ElementType> = {
  as: Component; // Componente que se va a renderizar
  className?: string; // Clase CSS opcional
  children?: ReactNode; // Contenido hijo
  // Omitimos className y children para evitar conflictos de tipos y pasamos las props de motion
} & Omit<ComponentPropsWithoutRef<Component>, "className" | "children"> &
  MotionProps;

// Extendemos el tipo genérico para que pueda ser cualquier componente
export default function MotionElement<Component extends ElementType = "div">({
  as,
  className,
  children,
  ...rest
}: MotionElementProps<Component>) {
  // Memoizamos el componente de motion para evitar recrearlo en cada render
  const MotionComp = useMemo(() => motion.create(as), [as]);

  // Renderizamos el componente de motion con las props y children
  return (
    <MotionComp className={className} {...(rest as object)}>
      {children}
    </MotionComp>
  );
}
