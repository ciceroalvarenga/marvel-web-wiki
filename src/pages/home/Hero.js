import React, { useCallback, useEffect, useState } from 'react';
import 'antd/dist/antd.css';

import qs from 'qs';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import api from '../../services/api';
import { Modal, Button } from 'antd';
import {
  Container,
  CardList,
  Content,
  Card,
  Spinner,
  ContainerButton,
} from './HeroStyle';

import { ButtonMore } from '../../components/Buttons/ButtonMore';
import { handleHeros } from './HeroServices';
import { LoadingHero } from '../../components/loadHero/LoadingHero';

export function Hero() {
  const [text, setText] = useState('');
  const [heros, setHeros] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({
    visible: false,
    hero: [],
  });

  useEffect(() => {
    setHeros([]);
    text
      ? handleHeros(text).then((res) => setHeros(res))
      : handleHeros().then((res) => setHeros(res));
  }, [text]);

  function showModal(hero) {
    setModal({
      visible: true,
      hero,
    });
  }

  const handleMore = useCallback(async () => {
    setLoading(true);
    try {
      const offset = heros.length;

      const params = {
        offset,
        orderBy: '-modified',
      };

      const response = await api.get(`/characters?${qs.stringify(params)}`);

      if (response.data.data.offset === response.data.data.total) {
        alert('jureggg');
      }
      setLoading(false);

      setHeros([...heros, ...response.data.data.results]);
    } catch (err) {
      console.error(err);
    }
  }, [heros]);

  return (
    <>
      <Container>
        <header>
          <h1>
            The<strong>Hero</strong>Wiki
          </h1>
        </header>
        <div id="containerInput">
          <SearchInput
            value={text}
            onSearch={(search) => {
              setText(search);
            }}
          />
        </div>

        {!heros.length && <LoadingHero />}
        {heros && (
          <>
            <CardList>
              {heros.map((hero) => (
                <Card key={hero.id} thumbnail={hero.thumbnail}>
                  <p>{hero.name}</p>
                  <div id="img" />
                  <Content>
                    <div>
                      <button
                        type="button"
                        onClick={() => {
                          showModal(hero);
                        }}
                      >
                        Description
                      </button>
                    </div>
                  </Content>
                </Card>
              ))}
            </CardList>
            <ContainerButton>
              {heros.length > 19 ? (
                <ButtonMore onClick={handleMore}>
                  {loading ? <Spinner /> : 'More'}
                </ButtonMore>
              ) : (
                <></>
              )}
            </ContainerButton>
          </>
        )}
      </Container>
      <Modal
        visible={modal.visible}
        onCancel={() => setModal({ visible: false, hero: [] })}
        footer={[
          <>
            <Button onClick={() => setModal({ visible: false, hero: [] })}>
              Exit
            </Button>
          </>,
        ]}
      >
        <h2>{modal.hero.name}</h2>
        <p>
          {modal.hero.description
            ? modal.hero.description
            : 'Without description'}
        </p>
      </Modal>
    </>
  );
}
