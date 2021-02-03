import { useState, useCallback, useEffect } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

import useLocalStorage from "./hooks/useLocalStorage";

import Header from "./components/Header";
import AddLinkModal from "./components/AddLinkModal";
import Categories from "./components/Categories";
import Links from "./components/Links";

const Content = styled.main`
  flex-grow: 1;
  display: flex;
`;

const initialData = {
  messengers: {
    links: [
      {
        id: 1,
        label: "Telegram",
        href: "https://telegram.org/",
      },
      {
        id: 2,
        label: "Slack",
        href: "https://slack.com/",
      },
      {
        id: 3,
        label: "Signal",
        href: "https://signal.org/",
      },
    ],
    label: "Мессенджеры",
  },
  socials: {
    links: [
      {
        id: 4,
        label: "Вконтакте",
        href: "https://vk.com/",
      },
      {
        id: 5,
        label: "Facebook",
        href: "https://fb.com/",
      },
      {
        id: 6,
        label: "Twitter",
        href: "https://twitter.com/",
      },
    ],
    label: "Социальные сети",
  },
};

const App = () => {
  const [data, setData] = useLocalStorage("links", initialData);
  const [filteredData, setFilteredData] = useState({});
  const [linksToShow, setLinksToShow] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const links = Object.values(filteredData)
      .reduce((acc, item) => {
        acc.push(...item.links);
        return acc;
      }, [])
      .filter((link) =>
        link.label.toLowerCase().startsWith(searchTerm.toLowerCase())
      );
    setLinksToShow(links);
  }, [filteredData, searchTerm]);

  const filterByCategory = useCallback(
    (category) => {
      if (category && category in data) {
        setFilteredData({ [category]: data[category] });
      } else {
        setFilteredData(data);
      }
    },
    [data]
  );

  const handleSearchTermChange = useCallback((searchTerm) => {
    setSearchTerm(searchTerm);
  }, []);

  const openModal = useCallback(() => {
    setModalIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalIsOpen(false);
  }, []);

  const addNewLink = useCallback(
    ({ id, linkName, linkHref, linkCategory }) => {
      setData((prevData) => {
        const newData = {
          ...prevData,
          [linkCategory]: {
            ...prevData[linkCategory],
            links: [
              ...prevData[linkCategory].links,
              { id, label: linkName, href: linkHref },
            ],
          },
        };
        return newData;
      });
      closeModal();
    },
    [setData, closeModal]
  );

  return (
    <Router>
      <Header handleChange={handleSearchTermChange} handleClick={openModal} />
      <AddLinkModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        handleSubmit={addNewLink}
        data={data}
      />
      <Content>
        <Categories data={data} />
        <Route
          path="/:slug?"
          render={(props) => (
            <Links
              {...props}
              filterByCategory={filterByCategory}
              links={linksToShow}
            />
          )}
        />
      </Content>
    </Router>
  );
};

export default App;
