"use client";

import client from "@/app/apollo-client";
import { gql } from "@apollo/client";
import { Continent, Country } from "@/types";
import { useEffect, useState } from "react";

export function getCountries() {
  const [data, setData] = useState<Country[] | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  const mutate = async () => {
    const query = await client.query({
      query: gql`
        query Query {
          countries {
            code
            name
            phone
            emoji
            continent {
              code
              name
            }
          }
        }
      `,
    });

    setData(query.data.countries);
    setLoading(false);
  };

  useEffect(() => {
    mutate();
  });

  return { data, isLoading };
}

export function getContinents() {
  const [data, setData] = useState<Continent[] | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  const mutate = async () => {
    const query = await client.query({
      query: gql`
        query Query {
          continents {
            name
            code
          }
        }
      `,
    });
    setData(query.data.continents);
    setLoading(false);
  };

  useEffect(() => {
    mutate();
  });

  return { data, isLoading };
}
