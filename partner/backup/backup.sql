--
-- PostgreSQL database dump
--

-- Dumped from database version 14.3
-- Dumped by pg_dump version 15.2

-- Started on 2023-07-29 15:35:16

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: partner
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO partner;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 209 (class 1259 OID 16385)
-- Name: partner; Type: TABLE; Schema: public; Owner: partner
--

CREATE TABLE public.partner (
    id character varying NOT NULL,
    "storeName" character varying(255) NOT NULL,
    location character varying(255) NOT NULL,
    "webUrl" character varying(255) NOT NULL,
    "imageUrl" character varying(255) NOT NULL,
    "imagePublicId" character varying(255) NOT NULL
);


ALTER TABLE public.partner OWNER TO partner;

--
-- TOC entry 3319 (class 0 OID 16385)
-- Dependencies: 209
-- Data for Name: partner; Type: TABLE DATA; Schema: public; Owner: partner
--

COPY public.partner (id, "storeName", location, "webUrl", "imageUrl", "imagePublicId") FROM stdin;
d9f62378-8e7a-41cd-a607-3780f38a7ec1	V-tech	https://goo.gl/maps/K5jHsKWUzjMK751HA	http://vtech-computer.com/	http://res.cloudinary.com/dxvv1kmvf/image/upload/v1688651644/partner/p15cex6ogsuc4balkbnn.png	partner/p15cex6ogsuc4balkbnn
419db857-6ef8-4174-8a60-f9a9a86c5d75	GoldOne-computer	https://goo.gl/maps/QGDUVt8kPbYQdB1t8	https://www.goldonecomputer.com/	http://res.cloudinary.com/dxvv1kmvf/image/upload/v1688651687/partner/lfkakrua5f3gmjdabj2j.png	partner/lfkakrua5f3gmjdabj2j
09fe7cd1-c9e8-4407-bb7a-a24caf7d0094	ChanTra-Computer	https://goo.gl/maps/y7UArEJhoRgWEswA6	https://cccomputerkh.com/	http://res.cloudinary.com/dxvv1kmvf/image/upload/v1688651724/partner/pgnxmgjedcz21agnnthw.jpg	partner/pgnxmgjedcz21agnnthw
57e4db65-0b40-4ab5-9f19-3399f08f1faf	TopTech	https://goo.gl/maps/dc6H1jCaSbtan6YY7	https://toptechkh.com/	http://res.cloudinary.com/dxvv1kmvf/image/upload/v1688651778/partner/j8finy67cqteat5fs7by.png	partner/j8finy67cqteat5fs7by
\.


--
-- TOC entry 3179 (class 2606 OID 16391)
-- Name: partner partner_pkey; Type: CONSTRAINT; Schema: public; Owner: partner
--

ALTER TABLE ONLY public.partner
    ADD CONSTRAINT partner_pkey PRIMARY KEY (id);


--
-- TOC entry 3325 (class 0 OID 0)
-- Dependencies: 4
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: partner
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2023-07-29 15:35:16

--
-- PostgreSQL database dump complete
--

