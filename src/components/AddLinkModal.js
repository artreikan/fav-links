import React, { memo, useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";

import { getUniqId } from "../utils/getUniqId";

import Input from "./Input";
import Select from "./Select";
import Button from "./Button";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#424242",
    color: "#fff",
    width: "70%",
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.5)",
  },
};

Modal.setAppElement("body");

const Title = styled.h2`
  text-align: center;
`;

const FormGroup = styled.div`
  max-width: 65%;
  margin: auto;
  text-align: ${(props) => props.align || "left"};

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

const AddLinkModal = memo(({ handleSubmit, data, ...props }) => {
  const [linkName, setLinkName] = useState("");
  const [linkHref, setLinkHref] = useState("");
  const [linkCategory, setLinkCategory] = useState("messengers");

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit({
      id: getUniqId(),
      linkName,
      linkHref,
      linkCategory,
    });
  };

  return (
    <Modal {...props} style={customStyles}>
      <Title>Добавить ссылку</Title>
      <form onSubmit={onSubmit}>
        <FormGroup>
          <Label htmlFor="link-name">Название ссылки</Label>
          <Input
            id="link-name"
            value={linkName}
            onChange={(e) => setLinkName(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="link-href">Ссылка</Label>
          <Input
            id="link-href"
            type="url"
            value={linkHref}
            onChange={(e) => setLinkHref(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="link-category">Категория</Label>
          <Select
            value={linkCategory}
            onChange={(e) => setLinkCategory(e.target.value)}
            required
          >
            {Object.keys(data).map((key) => (
              <option key={key} value={key}>
                {data[key].label}
              </option>
            ))}
          </Select>
        </FormGroup>
        <FormGroup align="center">
          <Button>Добавить</Button>
        </FormGroup>
      </form>
    </Modal>
  );
});

export default AddLinkModal;
