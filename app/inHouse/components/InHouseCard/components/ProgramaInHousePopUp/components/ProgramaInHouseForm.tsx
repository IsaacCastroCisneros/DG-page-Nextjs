'use client'

import { MyForm } from '@/components/MyForm/MyForm'
import { MyInput } from '@/components/MyInput/MyInput'
import MyInputFlexContainer from '@/components/MyInputFlexContainer/MyInputFlexContainer'
import React, { useContext, useState } from 'react'
import inHouseCardContext from '../../context/inHouseCardContext'
import postRequest from '@/helpers/postRequest'
import nivelesDelCurso from '@/app/inHouse/helpers/nivelesDelCurso'
import cantidadDeAlumnos from '@/app/inHouse/helpers/cantidadDeAlumnos'

interface values
{
    ingresatuNombre:string,
    ingresatuCorreo:string,
    ingresaTuTelefono:string,
    entidad:string,
    cantidadDeAlumnos:string,
    niveldelCurso:string,
}

export const ProgramaInHouseForm = () => 
{ 
  const[values,setValues]=useState<values>(
    {
        ingresatuNombre:"",
        ingresatuCorreo:"",
        ingresaTuTelefono:"",
        entidad:"",
        cantidadDeAlumnos:"",
        niveldelCurso:"",
    }
  )  

  const isOk:boolean = Object.values(values).every(entry=>entry!=='')

  const{setShow,id,titulo}=useContext(inHouseCardContext)

  return (
    <MyForm
      styles="bg-[#e86b2a]"
      label="enviar proforma"
      isOk={isOk}
      setIsOpen={setShow}
      submit={()=>postRequest("inHouse",creatingFormData(values,id,titulo),true)}
    >
      <MyInputFlexContainer>
        <MyInput
          label="Ingresa tu Nombre"
          onlyText
          value={values.ingresatuNombre}
          onChange={(e) =>
            setValues({ ...values, ingresatuNombre: e.target.value })
          }
        />
        <MyInput
          label="Ingresa tu Correo"
          type="email"
          value={values.ingresatuCorreo}
          onChange={(e) =>
            setValues({ ...values, ingresatuCorreo: e.target.value })
          }
        />
      </MyInputFlexContainer>
      <MyInputFlexContainer>
        <MyInput
          label="Ingresa tu telefono"
          type="number"
          max={9}
          value={values.ingresaTuTelefono}
          onChange={(e) =>
            setValues({ ...values, ingresaTuTelefono: e.target.value })
          }
        />
        <MyInput
          label="Entidad (opcional)"
          name="entidad"
          value={values.entidad}
          onChange={(e) => setValues({ ...values, entidad: e.target.value })}
        />
      </MyInputFlexContainer>
      <MyInputFlexContainer>
        <MyInput
          label="Cantidad de Alumnos"
          options={cantidadDeAlumnos}
          value={values.cantidadDeAlumnos}
          onChange={(e) =>
            setValues({ ...values, cantidadDeAlumnos: e.target.value })
          }
        />
        <MyInput
          label="Nivel del Curso"
          options={nivelesDelCurso}
          value={values.niveldelCurso}
          onChange={(e) =>
            setValues({ ...values, niveldelCurso: e.target.value })
          }
        />
      </MyInputFlexContainer>
    </MyForm>
  );
}

function creatingFormData(values:values,id:string,titulo:string)
{
  const form = new FormData()
  form.append('pagina', "www.desarrolloglobal.pe/InHouse")
  form.append('cantidad', values.cantidadDeAlumnos)
  form.append('inhouse', titulo)
  form.append('id_inhouse', id)
  form.append('correo',values.ingresatuCorreo)
  form.append('entidad', values.entidad)
  form.append('nivel', values.niveldelCurso)
  form.append('nombres',values.ingresatuNombre)
  form.append('telefono', values.ingresaTuTelefono)
  form.append('ciudad', '')

  return form
}