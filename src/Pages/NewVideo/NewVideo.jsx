import React, { useState } from "react";
import { useVideoContext } from "../../Contexts/VideoContext";
import {
  FormContainer,
  Input,
  Textarea,
  Button,
  FormTitle,
} from "./NewVideo.styled";

const NewVideo = () => {
  const { addVideo } = useVideoContext();
  const [formData, setFormData] = useState({
    titulo: "",
    categoria: "",
    img: "",
    video: "",
    descripcion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addVideo(formData);
    setFormData({
      titulo: "",
      categoria: "",
      img: "",
      video: "",
      descripcion: "",
    });
  };

  const handleReset = () => {
    setFormData({
      titulo: "",
      categoria: "",
      img: "",
      video: "",
      descripcion: "",
    });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>Agregar nuevo video</FormTitle>
      <Input
        type="text"
        name="titulo"
        placeholder="Título"
        value={formData.titulo}
        onChange={handleChange}
        required
      />
      <Input
        type="text"
        name="categoria"
        placeholder="Categoria"
        value={formData.categoria}
        onChange={handleChange}
        required
      />
      <Input
        type="text"
        name="img"
        placeholder="URL de la imagen"
        value={formData.img}
        onChange={handleChange}
        required
      />
      <Input
        type="text"
        name="video"
        placeholder="URL del video"
        value={formData.video}
        onChange={handleChange}
        required
      />
      <Textarea
        name="descripcion"
        placeholder="Descripción"
        value={formData.descripcion}
        onChange={handleChange}
        required
      />
      <Button type="submit">Guardar</Button>
      <Button type="button" onClick={handleReset}>
        Limpiar
      </Button>
    </FormContainer>
  );
};

export default NewVideo;
