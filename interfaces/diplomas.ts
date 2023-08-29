export default interface diplomas 
{
  id: string;
  etiqueta: string;
  banner: string;
  titulo: string;
  icono: string;
  objectivos: string;
  descripcion: string;
  inicio: string;
  landing: string;
  imagen: string;
  certificados: string;
  asesores:Array<{
    nombre: string;
    descripcion: string;
    profesion: string;
    telefono: string;
    telefono_2: string;
    avatar: string;
  }>;
  video: string;
  source: string;
  precio: {
    normal: number;
    descuento: number;
    final: number;
  };
  cursos:Array<
  {
    id: string;
    icono: string;
    titulo: string;
    sesiones:Array<{
        id: string;
        titulo: string;
        sub_titulo: string;
      }>;
  }> ,
  total_sesiones: number;
  profesores: Array<{
    nombre: string;
    descripcion: string;
    profesion: string;
    telefono: string;
    telefono_2:string;
    avatar: string;
  }> 
  testimonios:Array<{
    usuario:string;
    avatar:string;
    registro:string;
    comentario:string;
  }>; 
  alumnos: number;
  color: string;
  comprado: boolean;
  valoracion: {
    totales: number;
    porcentaje: number;
  };
  tipo_clase: string;
  tipo: string;
  seo: string;
  nuevo_seos: {
    titulo: string;
    descripcion: string;
    tags: string;
  };
}