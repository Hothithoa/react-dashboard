import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import client from "../../../sanity/config";
import { GET_DETAIL_NOVEL } from "../../../sanity/novels";
import NovelStep from "../components/NovelStep";

const Edit = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery("novel", () => client.fetch(GET_DETAIL_NOVEL, { IdNovel: id }));

  const handleSubmit = async (data) => {
    try {
      alert("success");
    } catch (error) {
      alert("error");
    }
  };

  if (isLoading) return <div>Loading data...</div>;

  return <NovelStep data={data} onSubmit={handleSubmit} />;
};

export default Edit;
