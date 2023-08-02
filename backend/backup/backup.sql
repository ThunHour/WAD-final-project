--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

-- Started on 2023-07-28 21:43:22

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
-- TOC entry 5 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: main
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO main;

--
-- TOC entry 3565 (class 0 OID 0)
-- Dependencies: 5
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: main
--

COMMENT ON SCHEMA public IS '';


--
-- TOC entry 861 (class 1247 OID 130213)
-- Name: Role; Type: TYPE; Schema: public; Owner: main
--

CREATE TYPE public."Role" AS ENUM (
    'USER',
    'ADMIN'
);


ALTER TYPE public."Role" OWNER TO main;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 214 (class 1259 OID 130217)
-- Name: Brand; Type: TABLE; Schema: public; Owner: main
--

CREATE TABLE public."Brand" (
    id text NOT NULL,
    "brandName" text NOT NULL
);


ALTER TABLE public."Brand" OWNER TO main;

--
-- TOC entry 215 (class 1259 OID 130222)
-- Name: Case; Type: TABLE; Schema: public; Owner: main
--

CREATE TABLE public."Case" (
    id text NOT NULL,
    model text NOT NULL,
    price double precision NOT NULL,
    "panelCaseId" text
);


ALTER TABLE public."Case" OWNER TO main;

--
-- TOC entry 216 (class 1259 OID 130227)
-- Name: Category; Type: TABLE; Schema: public; Owner: main
--

CREATE TABLE public."Category" (
    category_id text NOT NULL,
    "categoryName" text NOT NULL,
    "brandId" text NOT NULL
);


ALTER TABLE public."Category" OWNER TO main;

--
-- TOC entry 217 (class 1259 OID 130232)
-- Name: Color; Type: TABLE; Schema: public; Owner: main
--

CREATE TABLE public."Color" (
    id text NOT NULL,
    color text NOT NULL,
    "gpuId" text,
    "powerSupplyId" text,
    "cpuId" text,
    "ramId" text,
    "storageId" text,
    "caseId" text,
    "motherBoardId" text
);


ALTER TABLE public."Color" OWNER TO main;

--
-- TOC entry 218 (class 1259 OID 130237)
-- Name: Cpu; Type: TABLE; Schema: public; Owner: main
--

CREATE TABLE public."Cpu" (
    id text NOT NULL,
    model text NOT NULL,
    spec text NOT NULL,
    price double precision NOT NULL,
    type text NOT NULL,
    "panelCpuId" text
);


ALTER TABLE public."Cpu" OWNER TO main;

--
-- TOC entry 219 (class 1259 OID 130242)
-- Name: Customize; Type: TABLE; Schema: public; Owner: main
--

CREATE TABLE public."Customize" (
    id text NOT NULL,
    "motherBoardId" text NOT NULL,
    share boolean DEFAULT false NOT NULL,
    "gpuId" text NOT NULL,
    "powerSupplyId" text NOT NULL,
    "cpuId" text NOT NULL,
    "ramId" text NOT NULL,
    "storageId" text NOT NULL,
    "caseId" text NOT NULL,
    "userId" text NOT NULL
);


ALTER TABLE public."Customize" OWNER TO main;

--
-- TOC entry 220 (class 1259 OID 130248)
-- Name: Gpu; Type: TABLE; Schema: public; Owner: main
--

CREATE TABLE public."Gpu" (
    id text NOT NULL,
    model text NOT NULL,
    spec text NOT NULL,
    price double precision NOT NULL,
    "paneGpulId" text
);


ALTER TABLE public."Gpu" OWNER TO main;

--
-- TOC entry 221 (class 1259 OID 130253)
-- Name: Image; Type: TABLE; Schema: public; Owner: main
--

CREATE TABLE public."Image" (
    id text NOT NULL,
    "imageUrl" text NOT NULL,
    "categooryId" text,
    "colorId" text,
    "brandId" text
);


ALTER TABLE public."Image" OWNER TO main;

--
-- TOC entry 222 (class 1259 OID 130258)
-- Name: MotherBoard; Type: TABLE; Schema: public; Owner: main
--

CREATE TABLE public."MotherBoard" (
    id text NOT NULL,
    model text NOT NULL,
    price double precision NOT NULL,
    "panelMotherBoardId" text
);


ALTER TABLE public."MotherBoard" OWNER TO main;

--
-- TOC entry 223 (class 1259 OID 130263)
-- Name: PanelCase; Type: TABLE; Schema: public; Owner: main
--

CREATE TABLE public."PanelCase" (
    id text NOT NULL,
    name text NOT NULL,
    "categoryId" text
);


ALTER TABLE public."PanelCase" OWNER TO main;

--
-- TOC entry 224 (class 1259 OID 130268)
-- Name: PanelCpu; Type: TABLE; Schema: public; Owner: main
--

CREATE TABLE public."PanelCpu" (
    id text NOT NULL,
    name text NOT NULL,
    "categoryId" text
);


ALTER TABLE public."PanelCpu" OWNER TO main;

--
-- TOC entry 225 (class 1259 OID 130273)
-- Name: PanelGpu; Type: TABLE; Schema: public; Owner: main
--

CREATE TABLE public."PanelGpu" (
    id text NOT NULL,
    name text NOT NULL,
    "categoryId" text
);


ALTER TABLE public."PanelGpu" OWNER TO main;

--
-- TOC entry 226 (class 1259 OID 130278)
-- Name: PanelMotherBoard; Type: TABLE; Schema: public; Owner: main
--

CREATE TABLE public."PanelMotherBoard" (
    id text NOT NULL,
    name text NOT NULL,
    "categoryId" text
);


ALTER TABLE public."PanelMotherBoard" OWNER TO main;

--
-- TOC entry 227 (class 1259 OID 130283)
-- Name: PanelPowerSupply; Type: TABLE; Schema: public; Owner: main
--

CREATE TABLE public."PanelPowerSupply" (
    id text NOT NULL,
    name text NOT NULL,
    "categoryId" text
);


ALTER TABLE public."PanelPowerSupply" OWNER TO main;

--
-- TOC entry 228 (class 1259 OID 130288)
-- Name: PanelRam; Type: TABLE; Schema: public; Owner: main
--

CREATE TABLE public."PanelRam" (
    id text NOT NULL,
    name text NOT NULL,
    "categoryId" text
);


ALTER TABLE public."PanelRam" OWNER TO main;

--
-- TOC entry 229 (class 1259 OID 130293)
-- Name: PanelStorage; Type: TABLE; Schema: public; Owner: main
--

CREATE TABLE public."PanelStorage" (
    id text NOT NULL,
    name text NOT NULL,
    "categoryId" text
);


ALTER TABLE public."PanelStorage" OWNER TO main;

--
-- TOC entry 230 (class 1259 OID 130298)
-- Name: PowerSupply; Type: TABLE; Schema: public; Owner: main
--

CREATE TABLE public."PowerSupply" (
    id text NOT NULL,
    model text NOT NULL,
    spec text NOT NULL,
    price double precision NOT NULL,
    "PanelPowerSupplyId" text
);


ALTER TABLE public."PowerSupply" OWNER TO main;

--
-- TOC entry 231 (class 1259 OID 130303)
-- Name: Ram; Type: TABLE; Schema: public; Owner: main
--

CREATE TABLE public."Ram" (
    id text NOT NULL,
    model text NOT NULL,
    spec text NOT NULL,
    price double precision NOT NULL,
    type text NOT NULL,
    "panelRamId" text
);


ALTER TABLE public."Ram" OWNER TO main;

--
-- TOC entry 232 (class 1259 OID 130308)
-- Name: Storage; Type: TABLE; Schema: public; Owner: main
--

CREATE TABLE public."Storage" (
    id text NOT NULL,
    model text NOT NULL,
    spec text NOT NULL,
    price double precision NOT NULL,
    "panelStorageId" text
);


ALTER TABLE public."Storage" OWNER TO main;

--
-- TOC entry 233 (class 1259 OID 130313)
-- Name: User; Type: TABLE; Schema: public; Owner: main
--

CREATE TABLE public."User" (
    id text NOT NULL,
    email text NOT NULL,
    name text NOT NULL,
    password text,
    role public."Role" DEFAULT 'USER'::public."Role" NOT NULL,
    "phoneNumber" text,
    google_password text
);


ALTER TABLE public."User" OWNER TO main;

--
-- TOC entry 234 (class 1259 OID 130319)
-- Name: _PanelCaseToPanelMotherBoard; Type: TABLE; Schema: public; Owner: main
--

CREATE TABLE public."_PanelCaseToPanelMotherBoard" (
    "A" text NOT NULL,
    "B" text NOT NULL
);


ALTER TABLE public."_PanelCaseToPanelMotherBoard" OWNER TO main;

--
-- TOC entry 235 (class 1259 OID 130324)
-- Name: _PanelCpuToPanelMotherBoard; Type: TABLE; Schema: public; Owner: main
--

CREATE TABLE public."_PanelCpuToPanelMotherBoard" (
    "A" text NOT NULL,
    "B" text NOT NULL
);


ALTER TABLE public."_PanelCpuToPanelMotherBoard" OWNER TO main;

--
-- TOC entry 236 (class 1259 OID 130329)
-- Name: _PanelMotherBoardToPanelRam; Type: TABLE; Schema: public; Owner: main
--

CREATE TABLE public."_PanelMotherBoardToPanelRam" (
    "A" text NOT NULL,
    "B" text NOT NULL
);


ALTER TABLE public."_PanelMotherBoardToPanelRam" OWNER TO main;

--
-- TOC entry 237 (class 1259 OID 130334)
-- Name: _PanelMotherBoardToPanelStorage; Type: TABLE; Schema: public; Owner: main
--

CREATE TABLE public."_PanelMotherBoardToPanelStorage" (
    "A" text NOT NULL,
    "B" text NOT NULL
);


ALTER TABLE public."_PanelMotherBoardToPanelStorage" OWNER TO main;

--
-- TOC entry 238 (class 1259 OID 130339)
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: main
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO main;

--
-- TOC entry 3535 (class 0 OID 130217)
-- Dependencies: 214
-- Data for Name: Brand; Type: TABLE DATA; Schema: public; Owner: main
--

COPY public."Brand" (id, "brandName") FROM stdin;
d66d6e31-0b4f-468e-9d3d-8ed017e71f6e	asus
e1fde227-81d2-4825-bc55-0a4377bc9727	dell
ed692e53-c0b2-4f63-956b-63b06a9b4d74	acer
29d68b86-bf1a-4658-96d4-0b0a239ea19d	lenovo
a11d1551-57f2-4fe2-a04e-ad3fdba1b08a	hp
45fad36f-f43a-4833-b0e4-bece03beb7d4	apple
c4abac43-d984-4c1d-8cb4-9f756663a866	rog
\.


--
-- TOC entry 3536 (class 0 OID 130222)
-- Dependencies: 215
-- Data for Name: Case; Type: TABLE DATA; Schema: public; Owner: main
--

COPY public."Case" (id, model, price, "panelCaseId") FROM stdin;
824e9b9b-523f-4c91-8de2-a1170779518f	ALSEYE WORRIOR	45	b64f6d4a-9812-4e28-b475-69aa9311899d
cd33944f-3697-41ac-82a5-4568b6754488	ALSEYE AURO	92	2a70f86d-00d9-42f8-883f-9017d3a4039e
2617b03c-5f6a-4668-aa95-ebb362720b85	ALSEYE AI PRO	192	84d38d94-9c55-472a-9061-8b9f7880b722
8e5f2453-7de0-46df-8d14-c04555cd0175	LIAN LI Mini ITX Aluminum Q58	145	d22cf8f0-3267-4ae5-b7ae-3f81dde66d84
5b0d8f58-3004-4c3a-99fa-66f106ef8fc8	LIAN LI O11 Dynamic Razer Edition	298	dbe5a122-0148-4245-844f-d57d316fad28
a9becfeb-9ec7-4b31-a63d-d501cdd4432d	NZXT H9 Flow Edition	931	386f953d-705f-48c7-b833-202e324bf25f
86ebcfc0-b630-4066-9ef6-f69d1054a110	XIGMATEK TOWER GEMINI II	581	ebfb971f-4c7f-46b2-ae2e-a8b3000f66b1
\.


--
-- TOC entry 3537 (class 0 OID 130227)
-- Dependencies: 216
-- Data for Name: Category; Type: TABLE DATA; Schema: public; Owner: main
--

COPY public."Category" (category_id, "categoryName", "brandId") FROM stdin;
9874c9b3-e964-4d4b-9db4-70e42cb7d2f4	gpu	d66d6e31-0b4f-468e-9d3d-8ed017e71f6e
07b9df9c-09f0-48dc-8d3f-7a24dfb00843	cpu	e1fde227-81d2-4825-bc55-0a4377bc9727
b021e52f-bdd9-45d4-82e5-13ab9e010fc7	ram	ed692e53-c0b2-4f63-956b-63b06a9b4d74
093a291d-70e0-4cc5-b5a2-440b00451341	motherBoard	29d68b86-bf1a-4658-96d4-0b0a239ea19d
cf06d153-8e7d-49fd-a018-21d22b50d615	powerSupply	a11d1551-57f2-4fe2-a04e-ad3fdba1b08a
b8385533-2ae0-4578-9704-9ed14f1e2668	storage	45fad36f-f43a-4833-b0e4-bece03beb7d4
feeb2566-9fce-4b6a-b79b-8a3e7be75649	case	c4abac43-d984-4c1d-8cb4-9f756663a866
\.


--
-- TOC entry 3538 (class 0 OID 130232)
-- Dependencies: 217
-- Data for Name: Color; Type: TABLE DATA; Schema: public; Owner: main
--

COPY public."Color" (id, color, "gpuId", "powerSupplyId", "cpuId", "ramId", "storageId", "caseId", "motherBoardId") FROM stdin;
07d89b75-e192-4c25-953a-c702d8910a5a	black	\N	\N	\N	\N	\N	\N	77faddcb-37cb-4bed-9f3c-a4d8494cea63
cb6f39b6-1b9b-4712-8710-077d997c991a	Black	\N	\N	\N	\N	\N	\N	da1c878f-5fa9-4266-a11c-f52460123379
7d39a088-0ea4-4f5d-a25f-ff4944485e96	White	\N	\N	\N	\N	\N	\N	8ff92d38-05f4-408e-888d-e414a41209d8
3c7ec08b-1484-412a-9d7c-5cd481823f9e	black	\N	\N	\N	\N	\N	\N	6f41d1a2-21a5-4304-8725-a72813d8c569
ce3827ee-194a-48ed-b17d-4ab1ca9c62f8	black	\N	\N	\N	\N	\N	\N	a43164ee-60ac-4aad-9ec9-17d75ff34d32
15ae56d9-7317-43f6-9243-70ffcadf9e7f	black	\N	\N	\N	\N	\N	\N	c90a97df-5fef-47b5-9841-07ab317b8344
a34516b5-bf80-47be-8c06-c2556bafba24	black	\N	\N	\N	\N	\N	\N	2d0286a7-2c0a-4f3a-a0b0-c3c1b4b02f43
75c5d833-b60a-4895-bc54-95890e877fdc	gray	\N	\N	\N	\N	\N	\N	68d6ec16-39ef-446f-961e-dd72b5ad7b2d
7791afeb-de83-40f1-a884-c12bd0f56f62	White	\N	\N	\N	\N	\N	824e9b9b-523f-4c91-8de2-a1170779518f	\N
e34e0ef7-8567-43db-92ac-9bf1662f376b	black	\N	\N	\N	\N	\N	cd33944f-3697-41ac-82a5-4568b6754488	\N
838b8cf5-3c13-4cbc-bc10-eace2309bf0c	white	\N	\N	\N	\N	\N	2617b03c-5f6a-4668-aa95-ebb362720b85	\N
5ea82313-bcbf-4b08-8919-77051c5e1229	black , white	\N	\N	\N	\N	\N	8e5f2453-7de0-46df-8d14-c04555cd0175	\N
f359440b-2128-47f9-84ee-db7fceaa28d4	Black	\N	\N	\N	\N	\N	5b0d8f58-3004-4c3a-99fa-66f106ef8fc8	\N
e2ca6975-5c77-4435-ba5a-2f691ddf71cc	white	\N	\N	\N	\N	\N	a9becfeb-9ec7-4b31-a63d-d501cdd4432d	\N
4c2df536-36b6-4d56-b30e-49cae05b3428	Black	\N	\N	\N	\N	\N	86ebcfc0-b630-4066-9ef6-f69d1054a110	\N
cf13e144-6603-4191-a87e-d442495c2f8a	black	\N	\N	\N	01a15d4e-a126-42cf-81c8-a4350a758329	\N	\N	\N
171585dc-a255-44c4-90c0-fbcb0a3e3c3e	black	\N	\N	\N	580d049e-d876-44ff-a63a-6c65d8410152	\N	\N	\N
45924b40-3554-4e62-9ec2-7ca10d9c21ff	black	\N	\N	\N	02ad4f13-aa9b-46aa-9e76-88d9f34d5475	\N	\N	\N
29460e8c-fa42-4f24-b03c-8946a53a3688	black	\N	\N	\N	a5d5c9ba-4d0e-4667-b83b-36f6444f0e03	\N	\N	\N
2da223d7-2ee5-4efe-851b-b1212d740d09	gray	\N	\N	\N	4ab72e65-7537-42fe-85b0-44a16046e90c	\N	\N	\N
679dcec0-0f51-49df-98ff-0ba65cf69e85	black	\N	\N	\N	25c292fd-deba-4e00-bf09-204492da2ea8	\N	\N	\N
e4cc9f6d-9556-4e16-a77a-3c11866f1f59	black	\N	\N	\N	f7b840ce-08ae-44fa-8712-02fd0bff1ca7	\N	\N	\N
e12e623f-b6d4-46db-96a2-f257d8c5d1ec	BLACK	\N	\N	b9acdc56-55c1-46dc-866a-eed6b06539f5	\N	\N	\N	\N
61dc3262-dfeb-48ca-8d31-7e10d42cee12	BLUE	\N	\N	19454030-ab84-4e0f-9603-5ce34743210a	\N	\N	\N	\N
86b2a274-1c98-49bc-bc0e-d40eac4f0cc8	BLUE	\N	\N	00c74944-a906-4232-8288-86f5314cd58b	\N	\N	\N	\N
3b34bf78-edb8-4274-bac7-9f1c09928dab	BLUE	\N	\N	8db89aba-c70e-4f26-b874-cd840cdc71ca	\N	\N	\N	\N
38733a8e-56b5-468f-b18e-6ce23453646a	blue	\N	\N	959d7f67-dfd1-4271-a590-6352a337e423	\N	\N	\N	\N
956a743c-50b9-4210-955b-70ebaf3f295d	black	8ced1a00-cc0e-4aed-824b-8e409a284bb7	\N	\N	\N	\N	\N	\N
f9351cb0-9da3-46b3-91da-68275bcd5632	black	f4132370-7a63-4b05-9875-8d2192ea289d	\N	\N	\N	\N	\N	\N
c116bbdb-18e7-42a6-999f-f66b4627c540	black	a33386d6-a50d-460d-904a-d30e6c143090	\N	\N	\N	\N	\N	\N
337d1c9c-3580-45bd-8423-57adba45e1c6	black	7235c071-a061-473e-9dc4-69d28bb0d846	\N	\N	\N	\N	\N	\N
dec7b318-389a-4723-ba41-6b8d7b402955	white	733ef547-315d-4bf8-98be-6151d49abc28	\N	\N	\N	\N	\N	\N
26e27f46-075c-47b6-a312-7cbf31bf33d8	black	883cb09e-555d-46c1-9f9d-d72fedc5ff4c	\N	\N	\N	\N	\N	\N
8b75ebb2-2018-41e7-9e50-48e5a41cb73e	black	\N	\N	\N	\N	5e1e68b0-8702-4d02-97cc-faed75ae2812	\N	\N
90da7a07-1c72-4d7e-8483-92acb072ce36	black, white	\N	\N	\N	\N	3fadd79b-4e5f-4c82-b963-857febf129a9	\N	\N
4d486f87-42c0-40d0-9632-cb0b45a8ddab	black	\N	\N	\N	\N	ce9dd9ef-ec0b-4d70-bf78-81e014e4ea23	\N	\N
b8ea3146-a168-4e46-9e7c-8575d72989d9	black	\N	\N	\N	\N	ffc3c9a5-a027-4c6d-b4c6-07d47d6e5e3d	\N	\N
1f9f4cf6-79b7-490a-be9e-ced1c989e4f7	black	\N	\N	\N	\N	6b7283d1-ddc7-45cd-8c40-d8d25a30eca0	\N	\N
443f6be4-7f47-4302-aca2-40fdc1728801	black	\N	\N	\N	\N	23b437b8-a0f7-42a8-a9c0-2f4b4f0a0f24	\N	\N
5e456f03-fdfc-47df-b45a-b4609d6d4e11	white	\N	d5fa321a-1134-4e8c-8855-b71dde81ddc0	\N	\N	\N	\N	\N
8b4be1b3-51b8-4d28-bbd2-d7b72f98c01e	black	\N	bf894ae4-84d7-46bd-b6cf-9445a5e436d3	\N	\N	\N	\N	\N
77c6e5d1-8dca-44a7-89cb-9866adcb2dc9	black	\N	7d1911cd-42a3-4783-8456-49bcb3a422ae	\N	\N	\N	\N	\N
5e05457c-2b2f-421f-8c13-ff8d85276e3b	black	\N	db668c6e-3b10-461f-a77d-f9504713de34	\N	\N	\N	\N	\N
1191e67d-bec3-4167-8fc6-4f1c409ae914	black	\N	146d8ffe-2879-44f6-b513-c82493603e46	\N	\N	\N	\N	\N
6f19c1cf-df79-4539-b735-46b678799d3a	black	\N	e257a682-1015-49ac-ad65-9e9aabdf90bf	\N	\N	\N	\N	\N
\.


--
-- TOC entry 3539 (class 0 OID 130237)
-- Dependencies: 218
-- Data for Name: Cpu; Type: TABLE DATA; Schema: public; Owner: main
--

COPY public."Cpu" (id, model, spec, price, type, "panelCpuId") FROM stdin;
b9acdc56-55c1-46dc-866a-eed6b06539f5	7000 Series SOCKET AM5 X670 & B650 SERIES	5.7GHz   64MB Cache 16 Core 32Thread	609	AMD Ryzen™	e0b376f8-2732-4080-9c8e-9a9b2b987657
19454030-ab84-4e0f-9603-5ce34743210a	13th Generation Intel® Core™ 2023 Support LGA 1700	i9-13900K	555	Intel® Core™ i9 GEN 13	34d80c09-f028-4fd9-881b-855eac5b595e
00c74944-a906-4232-8288-86f5314cd58b	13TH Generation Intel® Core™	i7-13700K	395	Intel® Core™ i5 GEN 13	bfb969c2-e5c6-4921-af99-d14b38c2bbce
8db89aba-c70e-4f26-b874-cd840cdc71ca	12TH Generation Intel® Core™	i7-12700	295	Intel® Core™ i7 GEN 13	cfe33e47-5971-4f3d-be18-79db3eac714f
959d7f67-dfd1-4271-a590-6352a337e423	1Th Generation Intel® Core™	i3-12100	99	Intel® Core™ i3	c52df45b-c0d3-47a1-b04e-bdd014077a13
\.


--
-- TOC entry 3540 (class 0 OID 130242)
-- Dependencies: 219
-- Data for Name: Customize; Type: TABLE DATA; Schema: public; Owner: main
--

COPY public."Customize" (id, "motherBoardId", share, "gpuId", "powerSupplyId", "cpuId", "ramId", "storageId", "caseId", "userId") FROM stdin;
247d52d6-8459-4849-bc93-edd9ac531b13	77faddcb-37cb-4bed-9f3c-a4d8494cea63	t	f4132370-7a63-4b05-9875-8d2192ea289d	146d8ffe-2879-44f6-b513-c82493603e46	8db89aba-c70e-4f26-b874-cd840cdc71ca	4ab72e65-7537-42fe-85b0-44a16046e90c	ffc3c9a5-a027-4c6d-b4c6-07d47d6e5e3d	8e5f2453-7de0-46df-8d14-c04555cd0175	3560cf2c-a6c9-4f41-9433-b4b88f4b2fa8
e7b65aa9-3522-428e-96f4-513d412790c0	77faddcb-37cb-4bed-9f3c-a4d8494cea63	t	a33386d6-a50d-460d-904a-d30e6c143090	bf894ae4-84d7-46bd-b6cf-9445a5e436d3	8db89aba-c70e-4f26-b874-cd840cdc71ca	4ab72e65-7537-42fe-85b0-44a16046e90c	3fadd79b-4e5f-4c82-b963-857febf129a9	cd33944f-3697-41ac-82a5-4568b6754488	3560cf2c-a6c9-4f41-9433-b4b88f4b2fa8
fbf7266a-9db1-4f65-a4d5-9512404a6f85	77faddcb-37cb-4bed-9f3c-a4d8494cea63	f	8ced1a00-cc0e-4aed-824b-8e409a284bb7	bf894ae4-84d7-46bd-b6cf-9445a5e436d3	19454030-ab84-4e0f-9603-5ce34743210a	02ad4f13-aa9b-46aa-9e76-88d9f34d5475	3fadd79b-4e5f-4c82-b963-857febf129a9	824e9b9b-523f-4c91-8de2-a1170779518f	3560cf2c-a6c9-4f41-9433-b4b88f4b2fa8
353cf276-3eb1-4fbd-8c05-ec35fe34559f	da1c878f-5fa9-4266-a11c-f52460123379	f	a33386d6-a50d-460d-904a-d30e6c143090	bf894ae4-84d7-46bd-b6cf-9445a5e436d3	8db89aba-c70e-4f26-b874-cd840cdc71ca	02ad4f13-aa9b-46aa-9e76-88d9f34d5475	ce9dd9ef-ec0b-4d70-bf78-81e014e4ea23	2617b03c-5f6a-4668-aa95-ebb362720b85	3560cf2c-a6c9-4f41-9433-b4b88f4b2fa8
fd023ca8-16bc-4b23-935a-822c47949694	77faddcb-37cb-4bed-9f3c-a4d8494cea63	t	a33386d6-a50d-460d-904a-d30e6c143090	bf894ae4-84d7-46bd-b6cf-9445a5e436d3	8db89aba-c70e-4f26-b874-cd840cdc71ca	4ab72e65-7537-42fe-85b0-44a16046e90c	3fadd79b-4e5f-4c82-b963-857febf129a9	cd33944f-3697-41ac-82a5-4568b6754488	04225245-c82b-482a-af5a-04ce0b2b3ef1
6a0f269e-d185-47cb-abda-c481bb139a33	77faddcb-37cb-4bed-9f3c-a4d8494cea63	t	f4132370-7a63-4b05-9875-8d2192ea289d	146d8ffe-2879-44f6-b513-c82493603e46	8db89aba-c70e-4f26-b874-cd840cdc71ca	4ab72e65-7537-42fe-85b0-44a16046e90c	ffc3c9a5-a027-4c6d-b4c6-07d47d6e5e3d	8e5f2453-7de0-46df-8d14-c04555cd0175	04225245-c82b-482a-af5a-04ce0b2b3ef1
24dda388-27b7-409a-b773-b15515f38188	77faddcb-37cb-4bed-9f3c-a4d8494cea63	t	f4132370-7a63-4b05-9875-8d2192ea289d	146d8ffe-2879-44f6-b513-c82493603e46	8db89aba-c70e-4f26-b874-cd840cdc71ca	4ab72e65-7537-42fe-85b0-44a16046e90c	ffc3c9a5-a027-4c6d-b4c6-07d47d6e5e3d	8e5f2453-7de0-46df-8d14-c04555cd0175	55dff984-bbe6-4b66-83ae-e06b026407b8
\.


--
-- TOC entry 3541 (class 0 OID 130248)
-- Dependencies: 220
-- Data for Name: Gpu; Type: TABLE DATA; Schema: public; Owner: main
--

COPY public."Gpu" (id, model, spec, price, "paneGpulId") FROM stdin;
8ced1a00-cc0e-4aed-824b-8e409a284bb7	LEADTEK QUADRO RTX A6000	RTX A6000 48GB	3999	8e9561ea-af1f-41e2-aa4d-cd41ed18c442
f4132370-7a63-4b05-9875-8d2192ea289d	LEADTEK QUADRO RTX A5000	RTX A4000 24GB	1999	85daddd6-03bc-4b60-8b60-361eb7126f4b
a33386d6-a50d-460d-904a-d30e6c143090	PNY GeForce  OC XLR8	RTX 4080 16GB	1199	cd8904a6-8502-46aa-8718-8caf70226563
7235c071-a061-473e-9dc4-69d28bb0d846	PNY GeForce  VERTO	RTX 4080 16GB	1179	8ebef666-8977-4b79-b851-12a8fe2d8095
733ef547-315d-4bf8-98be-6151d49abc28	PNY VDCRD  DUALFAN	GTX1650 4GB	199	104c42d1-6b4a-44ae-988e-9016b976cbf3
883cb09e-555d-46c1-9f9d-d72fedc5ff4c	ZOTAC RTX 3090 TRINITY	RTX 3090 24GB	1199	1e1575d9-25df-4c8b-b20c-219ecdef444b
\.


--
-- TOC entry 3542 (class 0 OID 130253)
-- Dependencies: 221
-- Data for Name: Image; Type: TABLE DATA; Schema: public; Owner: main
--

COPY public."Image" (id, "imageUrl", "categooryId", "colorId", "brandId") FROM stdin;
edf4d552-a0cd-4e96-93c8-2afeb701025d	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/category%2F1-gaming-build-components%20(1).jpg?alt=media&token=40e8c7c9-0707-4b06-a04e-d295b12cbb75	9874c9b3-e964-4d4b-9db4-70e42cb7d2f4	\N	\N
44d41ffd-d726-4791-b209-b056b478b054	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/brand%2Fdownload.png?alt=media&token=de7301e3-15a9-4fe6-a86e-5723a1715551	\N	\N	d66d6e31-0b4f-468e-9d3d-8ed017e71f6e
050ba471-0530-4566-bde7-6d06207f4461	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/category%2F1-gaming-build-components%20(1).jpg?alt=media&token=40e8c7c9-0707-4b06-a04e-d295b12cbb75	07b9df9c-09f0-48dc-8d3f-7a24dfb00843	\N	\N
ac4090a0-5e37-4702-84c9-989e282e2c0d	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/brand%2Fdownload.png?alt=media&token=de7301e3-15a9-4fe6-a86e-5723a1715551	\N	\N	e1fde227-81d2-4825-bc55-0a4377bc9727
cce78238-a52e-448f-acad-93e91fb5f9c8	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/category%2F1-gaming-build-components%20(1).jpg?alt=media&token=40e8c7c9-0707-4b06-a04e-d295b12cbb75	b021e52f-bdd9-45d4-82e5-13ab9e010fc7	\N	\N
b97d6848-b662-45a6-a71e-80384fcf7a38	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/brand%2Fdownload.png?alt=media&token=de7301e3-15a9-4fe6-a86e-5723a1715551	\N	\N	ed692e53-c0b2-4f63-956b-63b06a9b4d74
1d0cea97-d5af-4d27-a461-1ea504625f61	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/category%2F1-gaming-build-components%20(1).jpg?alt=media&token=40e8c7c9-0707-4b06-a04e-d295b12cbb75	093a291d-70e0-4cc5-b5a2-440b00451341	\N	\N
d2e86092-0d5d-40e3-bcc2-e2d0159f2a88	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/brand%2Fdownload.png?alt=media&token=de7301e3-15a9-4fe6-a86e-5723a1715551	\N	\N	29d68b86-bf1a-4658-96d4-0b0a239ea19d
50ce2c3d-1c96-458f-a8df-8342003b2a42	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/category%2F1-gaming-build-components%20(1).jpg?alt=media&token=40e8c7c9-0707-4b06-a04e-d295b12cbb75	cf06d153-8e7d-49fd-a018-21d22b50d615	\N	\N
06c4ef44-ef2c-4869-a13a-524ded578991	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/brand%2Fdownload.png?alt=media&token=de7301e3-15a9-4fe6-a86e-5723a1715551	\N	\N	a11d1551-57f2-4fe2-a04e-ad3fdba1b08a
c2891528-91c3-4b37-bef7-382325ec13a4	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/category%2F1-gaming-build-components%20(1).jpg?alt=media&token=40e8c7c9-0707-4b06-a04e-d295b12cbb75	b8385533-2ae0-4578-9704-9ed14f1e2668	\N	\N
78870adf-eece-4e8e-8e4a-018cd4c26567	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/brand%2Fdownload.png?alt=media&token=de7301e3-15a9-4fe6-a86e-5723a1715551	\N	\N	45fad36f-f43a-4833-b0e4-bece03beb7d4
afc735ce-4ea1-4d43-aa98-0736b0c4e6b2	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/category%2F1-gaming-build-components%20(1).jpg?alt=media&token=40e8c7c9-0707-4b06-a04e-d295b12cbb75	feeb2566-9fce-4b6a-b79b-8a3e7be75649	\N	\N
861acf4f-7079-4e35-b189-bdb45c987bbc	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/brand%2Fdownload.png?alt=media&token=de7301e3-15a9-4fe6-a86e-5723a1715551	\N	\N	c4abac43-d984-4c1d-8cb4-9f756663a866
bc2e935f-1366-4051-b0a9-913dba045330	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/motherBoard%2F6c28ee82-c4f3-4a3d-b099-d2393832cc95._AC_SL1085_?alt=media	\N	07d89b75-e192-4c25-953a-c702d8910a5a	\N
a1bf0de3-a616-4e6f-9f5d-ccd6e16b8f57	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/motherBoard%2Ff5f0b972-c5b4-48ea-b0b4-0cfd59661c7a.jpg?alt=media	\N	cb6f39b6-1b9b-4712-8710-077d997c991a	\N
45870320-9853-40d7-9993-b662989ae3e9	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/motherBoard%2Fe5429f0b-92d6-42cc-a6f8-fd9d94db8008.jpg?alt=media	\N	cb6f39b6-1b9b-4712-8710-077d997c991a	\N
491cf08e-fb94-4d17-9d68-002e1075da8e	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/motherBoard%2Fa5614f0d-64ad-431d-8de0-4fc60e0127b5.jpg?alt=media	\N	cb6f39b6-1b9b-4712-8710-077d997c991a	\N
260c0d0f-6456-49cd-af62-d1cd74d78c0a	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/motherBoard%2Fc9984f47-9da0-4f6d-99e7-535d206defb1.jpg?alt=media	\N	7d39a088-0ea4-4f5d-a25f-ff4944485e96	\N
5117a4e0-b4d8-497e-8829-b84cb374f21c	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/motherBoard%2F58d197ac-d2f9-4100-9041-3d9a547604ca.jpg?alt=media	\N	3c7ec08b-1484-412a-9d7c-5cd481823f9e	\N
15fc6e61-690c-4691-b9f0-5c9777e464e5	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/motherBoard%2F53ae2ba2-3451-4387-996d-2694c8f9f125.jpg?alt=media	\N	ce3827ee-194a-48ed-b17d-4ab1ca9c62f8	\N
c9f0b806-6cf1-439a-b97e-444ae7e6d33d	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/motherBoard%2Fc3dc54ae-7f95-4012-96bd-7dd079dbde57.jpg?alt=media	\N	15ae56d9-7317-43f6-9243-70ffcadf9e7f	\N
fd5ed8b9-f6f5-42bf-b924-68a13442438f	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/motherBoard%2Ff59fa023-b57d-452d-80cd-7723eafb5212.jpg?alt=media	\N	a34516b5-bf80-47be-8c06-c2556bafba24	\N
49fc36f9-b6eb-4f64-a49a-f358dd756363	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/motherBoard%2F44ce2ba6-54bd-4780-823b-955eade78e76.jpg?alt=media	\N	75c5d833-b60a-4895-bc54-95890e877fdc	\N
da17ba7b-6c65-48c7-a8df-cfd4e46b0936	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/case%2F6afaf2bf-090d-41fc-b5df-7c345961ff96.jpg?alt=media	\N	7791afeb-de83-40f1-a884-c12bd0f56f62	\N
3441fa5d-75cf-4682-bfb9-af338f9c370a	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/case%2Fc8d015e1-0db0-4950-8d13-07db051a8f10.jpg?alt=media	\N	e34e0ef7-8567-43db-92ac-9bf1662f376b	\N
7e1db6df-e9f8-4055-b8b6-ac4bfb5cc41a	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/case%2Fc51beeca-57c3-456e-bef9-642632c1ef4e.jpg?alt=media	\N	838b8cf5-3c13-4cbc-bc10-eace2309bf0c	\N
2728a056-5514-46c6-a281-5b1330c4bffc	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/case%2F15777c85-c2f7-4de3-ae13-d7bfa47c3a29.jpg?alt=media	\N	5ea82313-bcbf-4b08-8919-77051c5e1229	\N
70da076b-5c64-4a8b-a6b3-fde229be1115	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/case%2F02e71f8e-f315-491f-b857-59446494c32a.jpg?alt=media	\N	f359440b-2128-47f9-84ee-db7fceaa28d4	\N
6270f01d-77cf-42f2-b5a7-31dbac3ff87c	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/case%2Fac071952-bef0-4b8a-b2a5-2dc307888d86.jpg?alt=media	\N	e2ca6975-5c77-4435-ba5a-2f691ddf71cc	\N
cc10d7dc-fd18-442e-acf4-ccd306e98594	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/case%2Fa8cbd272-272c-4302-85a2-f472567b8384.jpg?alt=media	\N	4c2df536-36b6-4d56-b30e-49cae05b3428	\N
f93d082f-b511-4f23-bf52-06c7fde10da3	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/ram%2Fc1757159-5a92-4922-8db1-b578ee39c20d.jpg?alt=media	\N	cf13e144-6603-4191-a87e-d442495c2f8a	\N
39e01a54-1a44-475e-b49f-3d07438e7044	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/ram%2Fb39a4f8b-8a55-494b-bfa0-60327a9a4848.jpg?alt=media	\N	171585dc-a255-44c4-90c0-fbcb0a3e3c3e	\N
b095c614-ce45-44cd-965d-0cdca30503b8	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/ram%2Fd64efccf-4bf4-4096-a916-39576e09e30f.jpg?alt=media	\N	45924b40-3554-4e62-9ec2-7ca10d9c21ff	\N
d86ac7ae-1d1e-488d-bff9-81ebb9558bac	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/ram%2Fc934f5d6-34b9-4745-81c1-ffe26fbe81d0.jpg?alt=media	\N	29460e8c-fa42-4f24-b03c-8946a53a3688	\N
cfa3193e-27dd-49bf-9352-07f5c92b2734	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/ram%2Ff5b41023-b174-4528-9729-e674b85d1108.jpg?alt=media	\N	2da223d7-2ee5-4efe-851b-b1212d740d09	\N
dca55552-0fb7-49b1-99f0-e75a291b6b37	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/ram%2Feaf9d849-8c06-4004-b54a-327a9fdf62ce.jpg?alt=media	\N	679dcec0-0f51-49df-98ff-0ba65cf69e85	\N
5f914886-3ea7-42c9-bae0-be7c0ab92dc4	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/ram%2F7c62b37e-ee00-46b9-98d4-4984f4efd97e.jpg?alt=media	\N	e4cc9f6d-9556-4e16-a77a-3c11866f1f59	\N
651e93c2-7e4c-4085-baba-4a8d9f9994bc	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/cpu%2F599df3b4-8587-468a-8f53-c97d756a57be.jpg?alt=media	\N	e12e623f-b6d4-46db-96a2-f257d8c5d1ec	\N
99372996-8ee8-43ec-ac8f-a5e31e3cebd6	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/cpu%2F0f8672b2-8442-4b2a-aa0d-22cbf3bbe15d.jpg?alt=media	\N	61dc3262-dfeb-48ca-8d31-7e10d42cee12	\N
27dec050-ecd7-4b9d-b06d-9e976327c1bb	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/cpu%2Fd99e1fc3-7d87-46d8-a410-d14458dc4d35.jpg?alt=media	\N	86b2a274-1c98-49bc-bc0e-d40eac4f0cc8	\N
22566a17-11bc-42bc-b1cd-8f78423e3e2e	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/cpu%2F3f0a24a5-235c-449b-88ad-068e704683f8.jpg?alt=media	\N	3b34bf78-edb8-4274-bac7-9f1c09928dab	\N
bc5c1c3e-d45d-44a1-96d4-41a32f5e106a	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/cpu%2F29cf15e3-f15e-4dd7-a9d3-d9133e9e3bda.jpg?alt=media	\N	38733a8e-56b5-468f-b18e-6ce23453646a	\N
f6817728-cc68-4f4f-b9f2-fe8ccfeaf667	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/gpu%2F19d785bb-d186-4724-97bc-5cab9d2dc660.jpg?alt=media	\N	956a743c-50b9-4210-955b-70ebaf3f295d	\N
0f97265a-3edd-404c-8568-0305248ef90b	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/gpu%2Fe726fbbf-d3a3-46ec-9e49-c1b5436d0d11.jpg?alt=media	\N	f9351cb0-9da3-46b3-91da-68275bcd5632	\N
e2d3cf2c-8819-4297-9db9-ea8d939766db	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/gpu%2F247a5d61-f5c6-4141-91df-e75c0e3812ad.jpg?alt=media	\N	c116bbdb-18e7-42a6-999f-f66b4627c540	\N
3c027539-8b61-4df3-8f88-c5396afd4ba9	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/gpu%2F9cf1ad90-bd55-492e-b55d-558d3ec8dece.jpg?alt=media	\N	337d1c9c-3580-45bd-8423-57adba45e1c6	\N
f86d6e0b-c5cb-4c83-be41-59bd42273768	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/gpu%2Fe51e391e-a917-43b2-be15-80236cbe6061.jpg?alt=media	\N	dec7b318-389a-4723-ba41-6b8d7b402955	\N
9d740061-17d9-4f7a-8308-bc18c8aa2df3	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/gpu%2F58c0c283-cb0d-4b92-bf39-e2a720d26c29.jpg?alt=media	\N	26e27f46-075c-47b6-a312-7cbf31bf33d8	\N
2404f7eb-7fc0-4f9c-b859-4536a530ac1b	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/storage%2F10d75182-9e68-432c-b2e0-fc3f42fbd487.jpg?alt=media	\N	8b75ebb2-2018-41e7-9e50-48e5a41cb73e	\N
cb149ef0-c9a3-4301-8338-96cbdd5298a7	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/storage%2F3bdfc54f-0147-46f2-918a-eabcf06fd32b.jpg?alt=media	\N	90da7a07-1c72-4d7e-8483-92acb072ce36	\N
6fb5f4ca-99bf-45de-a5fe-474ddc693553	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/storage%2F069b13be-81ab-4442-9a9f-a61cadd34453.2LT?alt=media	\N	4d486f87-42c0-40d0-9632-cb0b45a8ddab	\N
1b90d433-a43e-4f1b-9d02-681cc5c25de0	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/storage%2F6cb931b9-4bcc-46d2-beb1-e817c5ac168e.jpg?alt=media	\N	b8ea3146-a168-4e46-9e7c-8575d72989d9	\N
9e427b4d-3b98-47f6-9ad8-fe9195ae0260	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/storage%2Fb4531ea9-153e-46be-ba73-29d2ee441144.jpg?alt=media	\N	1f9f4cf6-79b7-490a-be9e-ced1c989e4f7	\N
6e4c6630-6e6d-4c7f-b765-441df8f94c96	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/storage%2Fcb1d2775-389d-4870-bc98-48401a73f6b5.2?alt=media	\N	443f6be4-7f47-4302-aca2-40fdc1728801	\N
c721c747-affb-4ca9-a70e-4c85d52995eb	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/powerSupply%2Fa94acfaf-1dcc-44e6-8ccd-6db7d75fd80e.jpg?alt=media	\N	5e456f03-fdfc-47df-b45a-b4609d6d4e11	\N
37659aaf-635b-445e-9a35-e3fedceb285a	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/powerSupply%2Fee331a2e-96e1-4b7c-a8c9-7b73e197578d.jpg?alt=media	\N	8b4be1b3-51b8-4d28-bbd2-d7b72f98c01e	\N
cd535ac3-7876-48f0-8668-c715a10f3387	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/powerSupply%2F3a23028f-86e8-4480-8b70-9c00b6cd8f1a.jpg?alt=media	\N	77c6e5d1-8dca-44a7-89cb-9866adcb2dc9	\N
a9c1e62b-a40e-4cc3-bf97-850997c8bd1f	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/powerSupply%2F80a2576f-2bd6-42d1-aa05-7bc4e498b38b.jpg?alt=media	\N	5e05457c-2b2f-421f-8c13-ff8d85276e3b	\N
579f1b36-cb79-47de-80e2-3aa7f9c06d2a	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/powerSupply%2F3aa76f6d-13d9-49e4-b2c7-560b9d237c1c.jpg?alt=media	\N	1191e67d-bec3-4167-8fc6-4f1c409ae914	\N
38447506-aaf4-4aca-8d52-d9060a54dc9a	https://firebasestorage.googleapis.com/v0/b/wad-final-image-storage.appspot.com/o/powerSupply%2F86c26eb4-867e-4926-9c43-116b1ce53675.jpg?alt=media	\N	6f19c1cf-df79-4539-b735-46b678799d3a	\N
\.


--
-- TOC entry 3543 (class 0 OID 130258)
-- Dependencies: 222
-- Data for Name: MotherBoard; Type: TABLE DATA; Schema: public; Owner: main
--

COPY public."MotherBoard" (id, model, price, "panelMotherBoardId") FROM stdin;
77faddcb-37cb-4bed-9f3c-a4d8494cea63	Ultra Durable	87.99	8d23fb84-a100-491d-b2a5-e83b311bb340
da1c878f-5fa9-4266-a11c-f52460123379	Asrock Z790 PG-ITX/TB4	369	b62fbb9b-cf9c-418b-b47c-5f646847ec66
8ff92d38-05f4-408e-888d-e414a41209d8	NZXT N7 Z790 White Edition	299	b1d67be4-a8cf-45da-b913-c908540de7b6
6f41d1a2-21a5-4304-8725-a72813d8c569	NZXT N7 Z790 White Edition	299	28b41566-9b67-4866-9033-5fe32e398781
a43164ee-60ac-4aad-9ec9-17d75ff34d32	Asrock Z790 LiveMixer	295	0054c3af-44b0-484b-b7df-447298c3c026
c90a97df-5fef-47b5-9841-07ab317b8344	Asrock Z790 Pro RS	249	c17887e2-3342-4af0-ba0f-c5ea199fc9f9
2d0286a7-2c0a-4f3a-a0b0-c3c1b4b02f43	Asrock Z690 TAICHI	599	9fc775c0-3ef2-4199-8159-011df0dc6f29
68d6ec16-39ef-446f-961e-dd72b5ad7b2d	ASRock Z490M-ITX/ac	165	3627fc0f-920b-47c4-88b4-ad0986d0b72b
\.


--
-- TOC entry 3544 (class 0 OID 130263)
-- Dependencies: 223
-- Data for Name: PanelCase; Type: TABLE DATA; Schema: public; Owner: main
--

COPY public."PanelCase" (id, name, "categoryId") FROM stdin;
b64f6d4a-9812-4e28-b475-69aa9311899d	ALSEYE WORRIOR	feeb2566-9fce-4b6a-b79b-8a3e7be75649
2a70f86d-00d9-42f8-883f-9017d3a4039e	ALSEYE AURO	feeb2566-9fce-4b6a-b79b-8a3e7be75649
84d38d94-9c55-472a-9061-8b9f7880b722	ALSEYE AI PRO	feeb2566-9fce-4b6a-b79b-8a3e7be75649
d22cf8f0-3267-4ae5-b7ae-3f81dde66d84	LIAN LI Mini ITX Aluminum Q58	feeb2566-9fce-4b6a-b79b-8a3e7be75649
dbe5a122-0148-4245-844f-d57d316fad28	LIAN LI O11 Dynamic Razer Edition	feeb2566-9fce-4b6a-b79b-8a3e7be75649
386f953d-705f-48c7-b833-202e324bf25f	NZXT H9 Flow Edition	feeb2566-9fce-4b6a-b79b-8a3e7be75649
ebfb971f-4c7f-46b2-ae2e-a8b3000f66b1	XIGMATEK TOWER GEMINI II	feeb2566-9fce-4b6a-b79b-8a3e7be75649
\.


--
-- TOC entry 3545 (class 0 OID 130268)
-- Dependencies: 224
-- Data for Name: PanelCpu; Type: TABLE DATA; Schema: public; Owner: main
--

COPY public."PanelCpu" (id, name, "categoryId") FROM stdin;
e0b376f8-2732-4080-9c8e-9a9b2b987657	7000 Series SOCKET AM5 X670 & B650 SERIES	07b9df9c-09f0-48dc-8d3f-7a24dfb00843
34d80c09-f028-4fd9-881b-855eac5b595e	13th Generation Intel® Core™ 2023 Support LGA 1700	07b9df9c-09f0-48dc-8d3f-7a24dfb00843
bfb969c2-e5c6-4921-af99-d14b38c2bbce	13TH Generation Intel® Core™	07b9df9c-09f0-48dc-8d3f-7a24dfb00843
cfe33e47-5971-4f3d-be18-79db3eac714f	12TH Generation Intel® Core™	07b9df9c-09f0-48dc-8d3f-7a24dfb00843
c52df45b-c0d3-47a1-b04e-bdd014077a13	1Th Generation Intel® Core™	07b9df9c-09f0-48dc-8d3f-7a24dfb00843
\.


--
-- TOC entry 3546 (class 0 OID 130273)
-- Dependencies: 225
-- Data for Name: PanelGpu; Type: TABLE DATA; Schema: public; Owner: main
--

COPY public."PanelGpu" (id, name, "categoryId") FROM stdin;
8e9561ea-af1f-41e2-aa4d-cd41ed18c442	LEADTEK QUADRO RTX A6000	9874c9b3-e964-4d4b-9db4-70e42cb7d2f4
85daddd6-03bc-4b60-8b60-361eb7126f4b	LEADTEK QUADRO RTX A5000	9874c9b3-e964-4d4b-9db4-70e42cb7d2f4
cd8904a6-8502-46aa-8718-8caf70226563	PNY GeForce  OC XLR8	9874c9b3-e964-4d4b-9db4-70e42cb7d2f4
8ebef666-8977-4b79-b851-12a8fe2d8095	PNY GeForce  VERTO	9874c9b3-e964-4d4b-9db4-70e42cb7d2f4
104c42d1-6b4a-44ae-988e-9016b976cbf3	PNY VDCRD  DUALFAN	9874c9b3-e964-4d4b-9db4-70e42cb7d2f4
1e1575d9-25df-4c8b-b20c-219ecdef444b	ZOTAC RTX 3090 TRINITY	9874c9b3-e964-4d4b-9db4-70e42cb7d2f4
\.


--
-- TOC entry 3547 (class 0 OID 130278)
-- Dependencies: 226
-- Data for Name: PanelMotherBoard; Type: TABLE DATA; Schema: public; Owner: main
--

COPY public."PanelMotherBoard" (id, name, "categoryId") FROM stdin;
8d23fb84-a100-491d-b2a5-e83b311bb340	Ultra Durable	093a291d-70e0-4cc5-b5a2-440b00451341
b62fbb9b-cf9c-418b-b47c-5f646847ec66	Asrock Z790 PG-ITX/TB4	093a291d-70e0-4cc5-b5a2-440b00451341
b1d67be4-a8cf-45da-b913-c908540de7b6	NZXT N7 Z790 White Edition	093a291d-70e0-4cc5-b5a2-440b00451341
28b41566-9b67-4866-9033-5fe32e398781	NZXT N7 Z790 White Edition	093a291d-70e0-4cc5-b5a2-440b00451341
0054c3af-44b0-484b-b7df-447298c3c026	Asrock Z790 LiveMixer	093a291d-70e0-4cc5-b5a2-440b00451341
c17887e2-3342-4af0-ba0f-c5ea199fc9f9	Asrock Z790 Pro RS	093a291d-70e0-4cc5-b5a2-440b00451341
9fc775c0-3ef2-4199-8159-011df0dc6f29	Asrock Z690 TAICHI	093a291d-70e0-4cc5-b5a2-440b00451341
3627fc0f-920b-47c4-88b4-ad0986d0b72b	ASRock Z490M-ITX/ac	093a291d-70e0-4cc5-b5a2-440b00451341
\.


--
-- TOC entry 3548 (class 0 OID 130283)
-- Dependencies: 227
-- Data for Name: PanelPowerSupply; Type: TABLE DATA; Schema: public; Owner: main
--

COPY public."PanelPowerSupply" (id, name, "categoryId") FROM stdin;
29863153-9ed6-4c68-a47e-c9aad6baad66	NZXT	cf06d153-8e7d-49fd-a018-21d22b50d615
caa575b4-ea93-400e-8262-36bf6b0abf7e	Cooler Master V GOLD-V2	cf06d153-8e7d-49fd-a018-21d22b50d615
41f087eb-eae8-4510-a01a-9a6c09051dc9	Cooler Master XG Platinum	cf06d153-8e7d-49fd-a018-21d22b50d615
a4ee15fb-e51b-4aa5-a7e8-4ae7e85ae5fc	Cooler Master MWE Gold V2	cf06d153-8e7d-49fd-a018-21d22b50d615
07c9018d-c258-4aad-8260-3f2bad86cefa	Cooler Master Master Series	cf06d153-8e7d-49fd-a018-21d22b50d615
38d3396a-31fe-4c88-9019-2009b524c193	XIGMATEK	cf06d153-8e7d-49fd-a018-21d22b50d615
\.


--
-- TOC entry 3549 (class 0 OID 130288)
-- Dependencies: 228
-- Data for Name: PanelRam; Type: TABLE DATA; Schema: public; Owner: main
--

COPY public."PanelRam" (id, name, "categoryId") FROM stdin;
fbc6997c-2be6-4ea2-abac-6341b3a707f8	PNY XLR8 Gaming EPIC-X RGB™	b021e52f-bdd9-45d4-82e5-13ab9e010fc7
de26210f-366d-4ddb-bbb5-c42393d8c011	Lexar HADES DDR4 3600Mhz RGB	b021e52f-bdd9-45d4-82e5-13ab9e010fc7
841f5eba-ac58-46c1-a2cb-53cc795b2373	DESKTOP TEAM ELIT DDR5	b021e52f-bdd9-45d4-82e5-13ab9e010fc7
d772d2d8-ca38-493b-bc33-fa013e9be316	G-Skill DDR5 Overclocking DRAM	b021e52f-bdd9-45d4-82e5-13ab9e010fc7
225bc3fb-7cba-406c-a7e7-2ee8b73baf17	G-Skill DDR4 Overclocking DRAM	b021e52f-bdd9-45d4-82e5-13ab9e010fc7
335fd898-8b21-4ba1-afd9-1167f770c839	PNY XLR DDR4 2666Mhz	b021e52f-bdd9-45d4-82e5-13ab9e010fc7
5f7cd683-4907-469a-8422-2cc745630eba	Lexar HADES	b021e52f-bdd9-45d4-82e5-13ab9e010fc7
\.


--
-- TOC entry 3550 (class 0 OID 130293)
-- Dependencies: 229
-- Data for Name: PanelStorage; Type: TABLE DATA; Schema: public; Owner: main
--

COPY public."PanelStorage" (id, name, "categoryId") FROM stdin;
001d150d-ed6a-44b1-a9d0-c8080856c70d	Brand: TEAM GROUP SSD 2.5" SATA III	b8385533-2ae0-4578-9704-9ed14f1e2668
018b8e18-9ec2-429a-9dfc-4da94cbaabdb	Brand: PNY SSD 2.5" SATA III	b8385533-2ae0-4578-9704-9ed14f1e2668
ac04e49d-2766-44bf-82d8-cf7f27220daa	Brand: TEAM \\ Lexar M.2 PCIe Gen 3	b8385533-2ae0-4578-9704-9ed14f1e2668
84f9fb94-d8f0-4e6c-83f0-d4667f18ed64	Brand: Lexar ( USA Brand ) M.2 PCIe Gen 4	b8385533-2ae0-4578-9704-9ed14f1e2668
01373a0b-fa75-433a-9a8f-fadc9cbe0e60	Brand: PNY SSD 2.5" SATA I	b8385533-2ae0-4578-9704-9ed14f1e2668
870d29d8-204b-4772-9450-962cbdb0437d	Brand: PNY ( USA Brand ) M.2 PCIe Gen 4	b8385533-2ae0-4578-9704-9ed14f1e2668
\.


--
-- TOC entry 3551 (class 0 OID 130298)
-- Dependencies: 230
-- Data for Name: PowerSupply; Type: TABLE DATA; Schema: public; Owner: main
--

COPY public."PowerSupply" (id, model, spec, price, "PanelPowerSupplyId") FROM stdin;
d5fa321a-1134-4e8c-8855-b71dde81ddc0	NZXT	650W 80 Plus	79	29863153-9ed6-4c68-a47e-c9aad6baad66
bf894ae4-84d7-46bd-b6cf-9445a5e436d3	Cooler Master V GOLD-V2	850W	130	caa575b4-ea93-400e-8262-36bf6b0abf7e
7d1911cd-42a3-4783-8456-49bcb3a422ae	Cooler Master XG Platinum	2000W	399	41f087eb-eae8-4510-a01a-9a6c09051dc9
db668c6e-3b10-461f-a77d-f9504713de34	Cooler Master MWE Gold V2	850W	199	a4ee15fb-e51b-4aa5-a7e8-4ae7e85ae5fc
146d8ffe-2879-44f6-b513-c82493603e46	Cooler Master Master Series	550W	79	07c9018d-c258-4aad-8260-3f2bad86cefa
e257a682-1015-49ac-ad65-9e9aabdf90bf	XIGMATEK	650W	75	38d3396a-31fe-4c88-9019-2009b524c193
\.


--
-- TOC entry 3552 (class 0 OID 130303)
-- Dependencies: 231
-- Data for Name: Ram; Type: TABLE DATA; Schema: public; Owner: main
--

COPY public."Ram" (id, model, spec, price, type, "panelRamId") FROM stdin;
01a15d4e-a126-42cf-81c8-a4350a758329	PNY XLR8 Gaming EPIC-X RGB™	3600Mhz	45	DDR4	fbc6997c-2be6-4ea2-abac-6341b3a707f8
580d049e-d876-44ff-a63a-6c65d8410152	Lexar HADES DDR4 3600Mhz RGB	3600Mhz	48	DDR4	de26210f-366d-4ddb-bbb5-c42393d8c011
02ad4f13-aa9b-46aa-9e76-88d9f34d5475	DESKTOP TEAM ELIT DDR5	3200MHz	25	DDR5	841f5eba-ac58-46c1-a2cb-53cc795b2373
a5d5c9ba-4d0e-4667-b83b-36f6444f0e03	G-Skill DDR5 Overclocking DRAM	5600MHz	55	DDR5	d772d2d8-ca38-493b-bc33-fa013e9be316
4ab72e65-7537-42fe-85b0-44a16046e90c	G-Skill DDR4 Overclocking DRAM	4266MHz	40	DDR4	225bc3fb-7cba-406c-a7e7-2ee8b73baf17
25c292fd-deba-4e00-bf09-204492da2ea8	PNY XLR DDR4 2666Mhz	2666Mhz	35	DDR4	335fd898-8b21-4ba1-afd9-1167f770c839
f7b840ce-08ae-44fa-8712-02fd0bff1ca7	Lexar HADES	3600Mhz 	37	DDR4 	5f7cd683-4907-469a-8422-2cc745630eba
\.


--
-- TOC entry 3553 (class 0 OID 130308)
-- Dependencies: 232
-- Data for Name: Storage; Type: TABLE DATA; Schema: public; Owner: main
--

COPY public."Storage" (id, model, spec, price, "panelStorageId") FROM stdin;
5e1e68b0-8702-4d02-97cc-faed75ae2812	Brand: TEAM GROUP SSD 2.5" SATA III	1TB	85	001d150d-ed6a-44b1-a9d0-c8080856c70d
3fadd79b-4e5f-4c82-b963-857febf129a9	Brand: PNY SSD 2.5" SATA III	2TB	120	018b8e18-9ec2-429a-9dfc-4da94cbaabdb
ce9dd9ef-ec0b-4d70-bf78-81e014e4ea23	Brand: TEAM \\ Lexar M.2 PCIe Gen 3	512GB	45	ac04e49d-2766-44bf-82d8-cf7f27220daa
ffc3c9a5-a027-4c6d-b4c6-07d47d6e5e3d	Brand: Lexar ( USA Brand ) M.2 PCIe Gen 4	2TB	179	84f9fb94-d8f0-4e6c-83f0-d4667f18ed64
6b7283d1-ddc7-45cd-8c40-d8d25a30eca0	Brand: PNY SSD 2.5" SATA I	1TB	299	01373a0b-fa75-433a-9a8f-fadc9cbe0e60
23b437b8-a0f7-42a8-a9c0-2f4b4f0a0f24	Brand: PNY ( USA Brand ) M.2 PCIe Gen 4	4TB	300	870d29d8-204b-4772-9450-962cbdb0437d
\.


--
-- TOC entry 3554 (class 0 OID 130313)
-- Dependencies: 233
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: main
--

COPY public."User" (id, email, name, password, role, "phoneNumber", google_password) FROM stdin;
25d6f1a2-9057-41d8-9580-f59ea895f7a8	admin@gmail.com	admin	$2b$10$rpwmcCN7a4yZnxl38/xT9ehXaWhe1ZBYX0t5L544dyOF.CaYVsSKG	ADMIN	\N	\N
c555100f-1260-4177-b368-11443e14eb7f	test@gmail.com	China	$2b$10$opbQQ9i47.90kU/iSrlOsOm/QZ2OrBcBmcvNKk5ALbExMQ3KjLvse	USER	098474643	\N
45929749-4070-4603-b291-cc03bf36d38e	superadmin@gmail.com	super admin		ADMIN	\N	\N
04225245-c82b-482a-af5a-04ce0b2b3ef1	seakkimhour20@kit.edu.kh	Kimhour	102914444533639758931	USER	\N	\N
3560cf2c-a6c9-4f41-9433-b4b88f4b2fa8	vghour@gmail.com	Seak	101841273632104349557	USER	\N	\N
55dff984-bbe6-4b66-83ae-e06b026407b8	kimhour4e@gmail.com	Cipher	100232175135997057818	USER	\N	\N
\.


--
-- TOC entry 3555 (class 0 OID 130319)
-- Dependencies: 234
-- Data for Name: _PanelCaseToPanelMotherBoard; Type: TABLE DATA; Schema: public; Owner: main
--

COPY public."_PanelCaseToPanelMotherBoard" ("A", "B") FROM stdin;
b64f6d4a-9812-4e28-b475-69aa9311899d	8d23fb84-a100-491d-b2a5-e83b311bb340
b64f6d4a-9812-4e28-b475-69aa9311899d	b62fbb9b-cf9c-418b-b47c-5f646847ec66
b64f6d4a-9812-4e28-b475-69aa9311899d	b1d67be4-a8cf-45da-b913-c908540de7b6
b64f6d4a-9812-4e28-b475-69aa9311899d	28b41566-9b67-4866-9033-5fe32e398781
b64f6d4a-9812-4e28-b475-69aa9311899d	0054c3af-44b0-484b-b7df-447298c3c026
b64f6d4a-9812-4e28-b475-69aa9311899d	c17887e2-3342-4af0-ba0f-c5ea199fc9f9
b64f6d4a-9812-4e28-b475-69aa9311899d	9fc775c0-3ef2-4199-8159-011df0dc6f29
b64f6d4a-9812-4e28-b475-69aa9311899d	3627fc0f-920b-47c4-88b4-ad0986d0b72b
2a70f86d-00d9-42f8-883f-9017d3a4039e	8d23fb84-a100-491d-b2a5-e83b311bb340
2a70f86d-00d9-42f8-883f-9017d3a4039e	b62fbb9b-cf9c-418b-b47c-5f646847ec66
2a70f86d-00d9-42f8-883f-9017d3a4039e	b1d67be4-a8cf-45da-b913-c908540de7b6
2a70f86d-00d9-42f8-883f-9017d3a4039e	28b41566-9b67-4866-9033-5fe32e398781
2a70f86d-00d9-42f8-883f-9017d3a4039e	0054c3af-44b0-484b-b7df-447298c3c026
2a70f86d-00d9-42f8-883f-9017d3a4039e	c17887e2-3342-4af0-ba0f-c5ea199fc9f9
2a70f86d-00d9-42f8-883f-9017d3a4039e	9fc775c0-3ef2-4199-8159-011df0dc6f29
2a70f86d-00d9-42f8-883f-9017d3a4039e	3627fc0f-920b-47c4-88b4-ad0986d0b72b
84d38d94-9c55-472a-9061-8b9f7880b722	b62fbb9b-cf9c-418b-b47c-5f646847ec66
84d38d94-9c55-472a-9061-8b9f7880b722	b1d67be4-a8cf-45da-b913-c908540de7b6
d22cf8f0-3267-4ae5-b7ae-3f81dde66d84	8d23fb84-a100-491d-b2a5-e83b311bb340
d22cf8f0-3267-4ae5-b7ae-3f81dde66d84	b62fbb9b-cf9c-418b-b47c-5f646847ec66
d22cf8f0-3267-4ae5-b7ae-3f81dde66d84	b1d67be4-a8cf-45da-b913-c908540de7b6
dbe5a122-0148-4245-844f-d57d316fad28	28b41566-9b67-4866-9033-5fe32e398781
dbe5a122-0148-4245-844f-d57d316fad28	0054c3af-44b0-484b-b7df-447298c3c026
dbe5a122-0148-4245-844f-d57d316fad28	9fc775c0-3ef2-4199-8159-011df0dc6f29
386f953d-705f-48c7-b833-202e324bf25f	8d23fb84-a100-491d-b2a5-e83b311bb340
386f953d-705f-48c7-b833-202e324bf25f	b62fbb9b-cf9c-418b-b47c-5f646847ec66
386f953d-705f-48c7-b833-202e324bf25f	b1d67be4-a8cf-45da-b913-c908540de7b6
ebfb971f-4c7f-46b2-ae2e-a8b3000f66b1	8d23fb84-a100-491d-b2a5-e83b311bb340
ebfb971f-4c7f-46b2-ae2e-a8b3000f66b1	b62fbb9b-cf9c-418b-b47c-5f646847ec66
ebfb971f-4c7f-46b2-ae2e-a8b3000f66b1	b1d67be4-a8cf-45da-b913-c908540de7b6
ebfb971f-4c7f-46b2-ae2e-a8b3000f66b1	28b41566-9b67-4866-9033-5fe32e398781
ebfb971f-4c7f-46b2-ae2e-a8b3000f66b1	0054c3af-44b0-484b-b7df-447298c3c026
ebfb971f-4c7f-46b2-ae2e-a8b3000f66b1	c17887e2-3342-4af0-ba0f-c5ea199fc9f9
ebfb971f-4c7f-46b2-ae2e-a8b3000f66b1	9fc775c0-3ef2-4199-8159-011df0dc6f29
ebfb971f-4c7f-46b2-ae2e-a8b3000f66b1	3627fc0f-920b-47c4-88b4-ad0986d0b72b
\.


--
-- TOC entry 3556 (class 0 OID 130324)
-- Dependencies: 235
-- Data for Name: _PanelCpuToPanelMotherBoard; Type: TABLE DATA; Schema: public; Owner: main
--

COPY public."_PanelCpuToPanelMotherBoard" ("A", "B") FROM stdin;
e0b376f8-2732-4080-9c8e-9a9b2b987657	8d23fb84-a100-491d-b2a5-e83b311bb340
e0b376f8-2732-4080-9c8e-9a9b2b987657	b1d67be4-a8cf-45da-b913-c908540de7b6
e0b376f8-2732-4080-9c8e-9a9b2b987657	28b41566-9b67-4866-9033-5fe32e398781
e0b376f8-2732-4080-9c8e-9a9b2b987657	9fc775c0-3ef2-4199-8159-011df0dc6f29
34d80c09-f028-4fd9-881b-855eac5b595e	8d23fb84-a100-491d-b2a5-e83b311bb340
34d80c09-f028-4fd9-881b-855eac5b595e	b62fbb9b-cf9c-418b-b47c-5f646847ec66
34d80c09-f028-4fd9-881b-855eac5b595e	b1d67be4-a8cf-45da-b913-c908540de7b6
34d80c09-f028-4fd9-881b-855eac5b595e	28b41566-9b67-4866-9033-5fe32e398781
34d80c09-f028-4fd9-881b-855eac5b595e	0054c3af-44b0-484b-b7df-447298c3c026
34d80c09-f028-4fd9-881b-855eac5b595e	c17887e2-3342-4af0-ba0f-c5ea199fc9f9
34d80c09-f028-4fd9-881b-855eac5b595e	9fc775c0-3ef2-4199-8159-011df0dc6f29
34d80c09-f028-4fd9-881b-855eac5b595e	3627fc0f-920b-47c4-88b4-ad0986d0b72b
bfb969c2-e5c6-4921-af99-d14b38c2bbce	b62fbb9b-cf9c-418b-b47c-5f646847ec66
bfb969c2-e5c6-4921-af99-d14b38c2bbce	b1d67be4-a8cf-45da-b913-c908540de7b6
bfb969c2-e5c6-4921-af99-d14b38c2bbce	28b41566-9b67-4866-9033-5fe32e398781
bfb969c2-e5c6-4921-af99-d14b38c2bbce	c17887e2-3342-4af0-ba0f-c5ea199fc9f9
bfb969c2-e5c6-4921-af99-d14b38c2bbce	3627fc0f-920b-47c4-88b4-ad0986d0b72b
cfe33e47-5971-4f3d-be18-79db3eac714f	8d23fb84-a100-491d-b2a5-e83b311bb340
cfe33e47-5971-4f3d-be18-79db3eac714f	b62fbb9b-cf9c-418b-b47c-5f646847ec66
cfe33e47-5971-4f3d-be18-79db3eac714f	b1d67be4-a8cf-45da-b913-c908540de7b6
cfe33e47-5971-4f3d-be18-79db3eac714f	28b41566-9b67-4866-9033-5fe32e398781
cfe33e47-5971-4f3d-be18-79db3eac714f	9fc775c0-3ef2-4199-8159-011df0dc6f29
c52df45b-c0d3-47a1-b04e-bdd014077a13	8d23fb84-a100-491d-b2a5-e83b311bb340
c52df45b-c0d3-47a1-b04e-bdd014077a13	b62fbb9b-cf9c-418b-b47c-5f646847ec66
c52df45b-c0d3-47a1-b04e-bdd014077a13	b1d67be4-a8cf-45da-b913-c908540de7b6
c52df45b-c0d3-47a1-b04e-bdd014077a13	28b41566-9b67-4866-9033-5fe32e398781
c52df45b-c0d3-47a1-b04e-bdd014077a13	0054c3af-44b0-484b-b7df-447298c3c026
c52df45b-c0d3-47a1-b04e-bdd014077a13	c17887e2-3342-4af0-ba0f-c5ea199fc9f9
c52df45b-c0d3-47a1-b04e-bdd014077a13	9fc775c0-3ef2-4199-8159-011df0dc6f29
c52df45b-c0d3-47a1-b04e-bdd014077a13	3627fc0f-920b-47c4-88b4-ad0986d0b72b
\.


--
-- TOC entry 3557 (class 0 OID 130329)
-- Dependencies: 236
-- Data for Name: _PanelMotherBoardToPanelRam; Type: TABLE DATA; Schema: public; Owner: main
--

COPY public."_PanelMotherBoardToPanelRam" ("A", "B") FROM stdin;
8d23fb84-a100-491d-b2a5-e83b311bb340	fbc6997c-2be6-4ea2-abac-6341b3a707f8
b62fbb9b-cf9c-418b-b47c-5f646847ec66	fbc6997c-2be6-4ea2-abac-6341b3a707f8
b1d67be4-a8cf-45da-b913-c908540de7b6	fbc6997c-2be6-4ea2-abac-6341b3a707f8
28b41566-9b67-4866-9033-5fe32e398781	fbc6997c-2be6-4ea2-abac-6341b3a707f8
0054c3af-44b0-484b-b7df-447298c3c026	fbc6997c-2be6-4ea2-abac-6341b3a707f8
c17887e2-3342-4af0-ba0f-c5ea199fc9f9	fbc6997c-2be6-4ea2-abac-6341b3a707f8
9fc775c0-3ef2-4199-8159-011df0dc6f29	fbc6997c-2be6-4ea2-abac-6341b3a707f8
3627fc0f-920b-47c4-88b4-ad0986d0b72b	fbc6997c-2be6-4ea2-abac-6341b3a707f8
b62fbb9b-cf9c-418b-b47c-5f646847ec66	de26210f-366d-4ddb-bbb5-c42393d8c011
b1d67be4-a8cf-45da-b913-c908540de7b6	de26210f-366d-4ddb-bbb5-c42393d8c011
28b41566-9b67-4866-9033-5fe32e398781	de26210f-366d-4ddb-bbb5-c42393d8c011
8d23fb84-a100-491d-b2a5-e83b311bb340	841f5eba-ac58-46c1-a2cb-53cc795b2373
b62fbb9b-cf9c-418b-b47c-5f646847ec66	841f5eba-ac58-46c1-a2cb-53cc795b2373
b1d67be4-a8cf-45da-b913-c908540de7b6	841f5eba-ac58-46c1-a2cb-53cc795b2373
28b41566-9b67-4866-9033-5fe32e398781	841f5eba-ac58-46c1-a2cb-53cc795b2373
0054c3af-44b0-484b-b7df-447298c3c026	841f5eba-ac58-46c1-a2cb-53cc795b2373
c17887e2-3342-4af0-ba0f-c5ea199fc9f9	841f5eba-ac58-46c1-a2cb-53cc795b2373
9fc775c0-3ef2-4199-8159-011df0dc6f29	841f5eba-ac58-46c1-a2cb-53cc795b2373
3627fc0f-920b-47c4-88b4-ad0986d0b72b	841f5eba-ac58-46c1-a2cb-53cc795b2373
b62fbb9b-cf9c-418b-b47c-5f646847ec66	d772d2d8-ca38-493b-bc33-fa013e9be316
b1d67be4-a8cf-45da-b913-c908540de7b6	d772d2d8-ca38-493b-bc33-fa013e9be316
28b41566-9b67-4866-9033-5fe32e398781	d772d2d8-ca38-493b-bc33-fa013e9be316
3627fc0f-920b-47c4-88b4-ad0986d0b72b	d772d2d8-ca38-493b-bc33-fa013e9be316
8d23fb84-a100-491d-b2a5-e83b311bb340	225bc3fb-7cba-406c-a7e7-2ee8b73baf17
b62fbb9b-cf9c-418b-b47c-5f646847ec66	225bc3fb-7cba-406c-a7e7-2ee8b73baf17
b1d67be4-a8cf-45da-b913-c908540de7b6	225bc3fb-7cba-406c-a7e7-2ee8b73baf17
28b41566-9b67-4866-9033-5fe32e398781	225bc3fb-7cba-406c-a7e7-2ee8b73baf17
0054c3af-44b0-484b-b7df-447298c3c026	225bc3fb-7cba-406c-a7e7-2ee8b73baf17
c17887e2-3342-4af0-ba0f-c5ea199fc9f9	225bc3fb-7cba-406c-a7e7-2ee8b73baf17
9fc775c0-3ef2-4199-8159-011df0dc6f29	225bc3fb-7cba-406c-a7e7-2ee8b73baf17
3627fc0f-920b-47c4-88b4-ad0986d0b72b	225bc3fb-7cba-406c-a7e7-2ee8b73baf17
b62fbb9b-cf9c-418b-b47c-5f646847ec66	335fd898-8b21-4ba1-afd9-1167f770c839
b1d67be4-a8cf-45da-b913-c908540de7b6	335fd898-8b21-4ba1-afd9-1167f770c839
28b41566-9b67-4866-9033-5fe32e398781	335fd898-8b21-4ba1-afd9-1167f770c839
3627fc0f-920b-47c4-88b4-ad0986d0b72b	335fd898-8b21-4ba1-afd9-1167f770c839
8d23fb84-a100-491d-b2a5-e83b311bb340	5f7cd683-4907-469a-8422-2cc745630eba
28b41566-9b67-4866-9033-5fe32e398781	5f7cd683-4907-469a-8422-2cc745630eba
0054c3af-44b0-484b-b7df-447298c3c026	5f7cd683-4907-469a-8422-2cc745630eba
c17887e2-3342-4af0-ba0f-c5ea199fc9f9	5f7cd683-4907-469a-8422-2cc745630eba
9fc775c0-3ef2-4199-8159-011df0dc6f29	5f7cd683-4907-469a-8422-2cc745630eba
\.


--
-- TOC entry 3558 (class 0 OID 130334)
-- Dependencies: 237
-- Data for Name: _PanelMotherBoardToPanelStorage; Type: TABLE DATA; Schema: public; Owner: main
--

COPY public."_PanelMotherBoardToPanelStorage" ("A", "B") FROM stdin;
8d23fb84-a100-491d-b2a5-e83b311bb340	001d150d-ed6a-44b1-a9d0-c8080856c70d
b62fbb9b-cf9c-418b-b47c-5f646847ec66	001d150d-ed6a-44b1-a9d0-c8080856c70d
b1d67be4-a8cf-45da-b913-c908540de7b6	001d150d-ed6a-44b1-a9d0-c8080856c70d
28b41566-9b67-4866-9033-5fe32e398781	001d150d-ed6a-44b1-a9d0-c8080856c70d
0054c3af-44b0-484b-b7df-447298c3c026	001d150d-ed6a-44b1-a9d0-c8080856c70d
c17887e2-3342-4af0-ba0f-c5ea199fc9f9	001d150d-ed6a-44b1-a9d0-c8080856c70d
9fc775c0-3ef2-4199-8159-011df0dc6f29	001d150d-ed6a-44b1-a9d0-c8080856c70d
3627fc0f-920b-47c4-88b4-ad0986d0b72b	001d150d-ed6a-44b1-a9d0-c8080856c70d
8d23fb84-a100-491d-b2a5-e83b311bb340	018b8e18-9ec2-429a-9dfc-4da94cbaabdb
b62fbb9b-cf9c-418b-b47c-5f646847ec66	018b8e18-9ec2-429a-9dfc-4da94cbaabdb
b1d67be4-a8cf-45da-b913-c908540de7b6	018b8e18-9ec2-429a-9dfc-4da94cbaabdb
28b41566-9b67-4866-9033-5fe32e398781	018b8e18-9ec2-429a-9dfc-4da94cbaabdb
0054c3af-44b0-484b-b7df-447298c3c026	018b8e18-9ec2-429a-9dfc-4da94cbaabdb
c17887e2-3342-4af0-ba0f-c5ea199fc9f9	018b8e18-9ec2-429a-9dfc-4da94cbaabdb
9fc775c0-3ef2-4199-8159-011df0dc6f29	018b8e18-9ec2-429a-9dfc-4da94cbaabdb
3627fc0f-920b-47c4-88b4-ad0986d0b72b	018b8e18-9ec2-429a-9dfc-4da94cbaabdb
b62fbb9b-cf9c-418b-b47c-5f646847ec66	ac04e49d-2766-44bf-82d8-cf7f27220daa
b1d67be4-a8cf-45da-b913-c908540de7b6	ac04e49d-2766-44bf-82d8-cf7f27220daa
28b41566-9b67-4866-9033-5fe32e398781	ac04e49d-2766-44bf-82d8-cf7f27220daa
9fc775c0-3ef2-4199-8159-011df0dc6f29	ac04e49d-2766-44bf-82d8-cf7f27220daa
8d23fb84-a100-491d-b2a5-e83b311bb340	84f9fb94-d8f0-4e6c-83f0-d4667f18ed64
b1d67be4-a8cf-45da-b913-c908540de7b6	84f9fb94-d8f0-4e6c-83f0-d4667f18ed64
28b41566-9b67-4866-9033-5fe32e398781	84f9fb94-d8f0-4e6c-83f0-d4667f18ed64
9fc775c0-3ef2-4199-8159-011df0dc6f29	84f9fb94-d8f0-4e6c-83f0-d4667f18ed64
b62fbb9b-cf9c-418b-b47c-5f646847ec66	01373a0b-fa75-433a-9a8f-fadc9cbe0e60
b1d67be4-a8cf-45da-b913-c908540de7b6	01373a0b-fa75-433a-9a8f-fadc9cbe0e60
28b41566-9b67-4866-9033-5fe32e398781	01373a0b-fa75-433a-9a8f-fadc9cbe0e60
8d23fb84-a100-491d-b2a5-e83b311bb340	870d29d8-204b-4772-9450-962cbdb0437d
b62fbb9b-cf9c-418b-b47c-5f646847ec66	870d29d8-204b-4772-9450-962cbdb0437d
b1d67be4-a8cf-45da-b913-c908540de7b6	870d29d8-204b-4772-9450-962cbdb0437d
28b41566-9b67-4866-9033-5fe32e398781	870d29d8-204b-4772-9450-962cbdb0437d
0054c3af-44b0-484b-b7df-447298c3c026	870d29d8-204b-4772-9450-962cbdb0437d
c17887e2-3342-4af0-ba0f-c5ea199fc9f9	870d29d8-204b-4772-9450-962cbdb0437d
9fc775c0-3ef2-4199-8159-011df0dc6f29	870d29d8-204b-4772-9450-962cbdb0437d
3627fc0f-920b-47c4-88b4-ad0986d0b72b	870d29d8-204b-4772-9450-962cbdb0437d
\.


--
-- TOC entry 3559 (class 0 OID 130339)
-- Dependencies: 238
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: main
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
1de475f6-6c3d-43ce-87b9-19bf97058e3d	a83eca5a8c4b6378958f4f45e37e88d5f8d923148406997fc80fffbe6d14fbc1	2023-07-05 18:11:12.121361+07	20230705111109_	\N	\N	2023-07-05 18:11:11.76412+07	1
\.


--
-- TOC entry 3277 (class 2606 OID 130347)
-- Name: Brand Brand_pkey; Type: CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."Brand"
    ADD CONSTRAINT "Brand_pkey" PRIMARY KEY (id);


--
-- TOC entry 3279 (class 2606 OID 130349)
-- Name: Case Case_pkey; Type: CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."Case"
    ADD CONSTRAINT "Case_pkey" PRIMARY KEY (id);


--
-- TOC entry 3282 (class 2606 OID 130351)
-- Name: Category Category_pkey; Type: CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."Category"
    ADD CONSTRAINT "Category_pkey" PRIMARY KEY (category_id);


--
-- TOC entry 3288 (class 2606 OID 130353)
-- Name: Color Color_pkey; Type: CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."Color"
    ADD CONSTRAINT "Color_pkey" PRIMARY KEY (id);


--
-- TOC entry 3293 (class 2606 OID 130355)
-- Name: Cpu Cpu_pkey; Type: CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."Cpu"
    ADD CONSTRAINT "Cpu_pkey" PRIMARY KEY (id);


--
-- TOC entry 3296 (class 2606 OID 130357)
-- Name: Customize Customize_pkey; Type: CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."Customize"
    ADD CONSTRAINT "Customize_pkey" PRIMARY KEY (id);


--
-- TOC entry 3298 (class 2606 OID 130359)
-- Name: Gpu Gpu_pkey; Type: CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."Gpu"
    ADD CONSTRAINT "Gpu_pkey" PRIMARY KEY (id);


--
-- TOC entry 3302 (class 2606 OID 130361)
-- Name: Image Image_pkey; Type: CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."Image"
    ADD CONSTRAINT "Image_pkey" PRIMARY KEY (id);


--
-- TOC entry 3305 (class 2606 OID 130363)
-- Name: MotherBoard MotherBoard_pkey; Type: CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."MotherBoard"
    ADD CONSTRAINT "MotherBoard_pkey" PRIMARY KEY (id);


--
-- TOC entry 3308 (class 2606 OID 130365)
-- Name: PanelCase PanelCase_pkey; Type: CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."PanelCase"
    ADD CONSTRAINT "PanelCase_pkey" PRIMARY KEY (id);


--
-- TOC entry 3312 (class 2606 OID 130367)
-- Name: PanelCpu PanelCpu_pkey; Type: CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."PanelCpu"
    ADD CONSTRAINT "PanelCpu_pkey" PRIMARY KEY (id);


--
-- TOC entry 3316 (class 2606 OID 130369)
-- Name: PanelGpu PanelGpu_pkey; Type: CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."PanelGpu"
    ADD CONSTRAINT "PanelGpu_pkey" PRIMARY KEY (id);


--
-- TOC entry 3320 (class 2606 OID 130371)
-- Name: PanelMotherBoard PanelMotherBoard_pkey; Type: CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."PanelMotherBoard"
    ADD CONSTRAINT "PanelMotherBoard_pkey" PRIMARY KEY (id);


--
-- TOC entry 3324 (class 2606 OID 130373)
-- Name: PanelPowerSupply PanelPowerSupply_pkey; Type: CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."PanelPowerSupply"
    ADD CONSTRAINT "PanelPowerSupply_pkey" PRIMARY KEY (id);


--
-- TOC entry 3328 (class 2606 OID 130375)
-- Name: PanelRam PanelRam_pkey; Type: CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."PanelRam"
    ADD CONSTRAINT "PanelRam_pkey" PRIMARY KEY (id);


--
-- TOC entry 3332 (class 2606 OID 130377)
-- Name: PanelStorage PanelStorage_pkey; Type: CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."PanelStorage"
    ADD CONSTRAINT "PanelStorage_pkey" PRIMARY KEY (id);


--
-- TOC entry 3334 (class 2606 OID 130379)
-- Name: PowerSupply PowerSupply_pkey; Type: CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."PowerSupply"
    ADD CONSTRAINT "PowerSupply_pkey" PRIMARY KEY (id);


--
-- TOC entry 3336 (class 2606 OID 130381)
-- Name: Ram Ram_pkey; Type: CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."Ram"
    ADD CONSTRAINT "Ram_pkey" PRIMARY KEY (id);


--
-- TOC entry 3338 (class 2606 OID 130383)
-- Name: Storage Storage_pkey; Type: CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."Storage"
    ADD CONSTRAINT "Storage_pkey" PRIMARY KEY (id);


--
-- TOC entry 3341 (class 2606 OID 130385)
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- TOC entry 3351 (class 2606 OID 130387)
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- TOC entry 3275 (class 1259 OID 130388)
-- Name: Brand_brandName_key; Type: INDEX; Schema: public; Owner: main
--

CREATE UNIQUE INDEX "Brand_brandName_key" ON public."Brand" USING btree ("brandName");


--
-- TOC entry 3280 (class 1259 OID 130389)
-- Name: Category_categoryName_key; Type: INDEX; Schema: public; Owner: main
--

CREATE UNIQUE INDEX "Category_categoryName_key" ON public."Category" USING btree ("categoryName");


--
-- TOC entry 3283 (class 1259 OID 130390)
-- Name: Color_caseId_key; Type: INDEX; Schema: public; Owner: main
--

CREATE UNIQUE INDEX "Color_caseId_key" ON public."Color" USING btree ("caseId");


--
-- TOC entry 3284 (class 1259 OID 130391)
-- Name: Color_cpuId_key; Type: INDEX; Schema: public; Owner: main
--

CREATE UNIQUE INDEX "Color_cpuId_key" ON public."Color" USING btree ("cpuId");


--
-- TOC entry 3285 (class 1259 OID 130392)
-- Name: Color_gpuId_key; Type: INDEX; Schema: public; Owner: main
--

CREATE UNIQUE INDEX "Color_gpuId_key" ON public."Color" USING btree ("gpuId");


--
-- TOC entry 3286 (class 1259 OID 130393)
-- Name: Color_motherBoardId_key; Type: INDEX; Schema: public; Owner: main
--

CREATE UNIQUE INDEX "Color_motherBoardId_key" ON public."Color" USING btree ("motherBoardId");


--
-- TOC entry 3289 (class 1259 OID 130394)
-- Name: Color_powerSupplyId_key; Type: INDEX; Schema: public; Owner: main
--

CREATE UNIQUE INDEX "Color_powerSupplyId_key" ON public."Color" USING btree ("powerSupplyId");


--
-- TOC entry 3290 (class 1259 OID 130395)
-- Name: Color_ramId_key; Type: INDEX; Schema: public; Owner: main
--

CREATE UNIQUE INDEX "Color_ramId_key" ON public."Color" USING btree ("ramId");


--
-- TOC entry 3291 (class 1259 OID 130396)
-- Name: Color_storageId_key; Type: INDEX; Schema: public; Owner: main
--

CREATE UNIQUE INDEX "Color_storageId_key" ON public."Color" USING btree ("storageId");


--
-- TOC entry 3294 (class 1259 OID 130632)
-- Name: Customize_gpuId_powerSupplyId_cpuId_ramId_storageId_caseId__key; Type: INDEX; Schema: public; Owner: main
--

CREATE UNIQUE INDEX "Customize_gpuId_powerSupplyId_cpuId_ramId_storageId_caseId__key" ON public."Customize" USING btree ("gpuId", "powerSupplyId", "cpuId", "ramId", "storageId", "caseId", "motherBoardId", "userId", share);


--
-- TOC entry 3299 (class 1259 OID 130397)
-- Name: Image_brandId_key; Type: INDEX; Schema: public; Owner: main
--

CREATE UNIQUE INDEX "Image_brandId_key" ON public."Image" USING btree ("brandId");


--
-- TOC entry 3300 (class 1259 OID 130398)
-- Name: Image_categooryId_key; Type: INDEX; Schema: public; Owner: main
--

CREATE UNIQUE INDEX "Image_categooryId_key" ON public."Image" USING btree ("categooryId");


--
-- TOC entry 3303 (class 1259 OID 130399)
-- Name: MotherBoard_id_key; Type: INDEX; Schema: public; Owner: main
--

CREATE UNIQUE INDEX "MotherBoard_id_key" ON public."MotherBoard" USING btree (id);


--
-- TOC entry 3306 (class 1259 OID 130400)
-- Name: PanelCase_id_name_key; Type: INDEX; Schema: public; Owner: main
--

CREATE UNIQUE INDEX "PanelCase_id_name_key" ON public."PanelCase" USING btree (id, name);


--
-- TOC entry 3309 (class 1259 OID 130401)
-- Name: PanelCpu_id_name_key; Type: INDEX; Schema: public; Owner: main
--

CREATE UNIQUE INDEX "PanelCpu_id_name_key" ON public."PanelCpu" USING btree (id, name);


--
-- TOC entry 3310 (class 1259 OID 130402)
-- Name: PanelCpu_name_key; Type: INDEX; Schema: public; Owner: main
--

CREATE UNIQUE INDEX "PanelCpu_name_key" ON public."PanelCpu" USING btree (name);


--
-- TOC entry 3313 (class 1259 OID 130403)
-- Name: PanelGpu_id_name_key; Type: INDEX; Schema: public; Owner: main
--

CREATE UNIQUE INDEX "PanelGpu_id_name_key" ON public."PanelGpu" USING btree (id, name);


--
-- TOC entry 3314 (class 1259 OID 130404)
-- Name: PanelGpu_name_key; Type: INDEX; Schema: public; Owner: main
--

CREATE UNIQUE INDEX "PanelGpu_name_key" ON public."PanelGpu" USING btree (name);


--
-- TOC entry 3317 (class 1259 OID 130405)
-- Name: PanelMotherBoard_id_key; Type: INDEX; Schema: public; Owner: main
--

CREATE UNIQUE INDEX "PanelMotherBoard_id_key" ON public."PanelMotherBoard" USING btree (id);


--
-- TOC entry 3318 (class 1259 OID 130406)
-- Name: PanelMotherBoard_id_name_key; Type: INDEX; Schema: public; Owner: main
--

CREATE UNIQUE INDEX "PanelMotherBoard_id_name_key" ON public."PanelMotherBoard" USING btree (id, name);


--
-- TOC entry 3321 (class 1259 OID 130407)
-- Name: PanelPowerSupply_id_name_key; Type: INDEX; Schema: public; Owner: main
--

CREATE UNIQUE INDEX "PanelPowerSupply_id_name_key" ON public."PanelPowerSupply" USING btree (id, name);


--
-- TOC entry 3322 (class 1259 OID 130408)
-- Name: PanelPowerSupply_name_key; Type: INDEX; Schema: public; Owner: main
--

CREATE UNIQUE INDEX "PanelPowerSupply_name_key" ON public."PanelPowerSupply" USING btree (name);


--
-- TOC entry 3325 (class 1259 OID 130409)
-- Name: PanelRam_id_name_key; Type: INDEX; Schema: public; Owner: main
--

CREATE UNIQUE INDEX "PanelRam_id_name_key" ON public."PanelRam" USING btree (id, name);


--
-- TOC entry 3326 (class 1259 OID 130410)
-- Name: PanelRam_name_key; Type: INDEX; Schema: public; Owner: main
--

CREATE UNIQUE INDEX "PanelRam_name_key" ON public."PanelRam" USING btree (name);


--
-- TOC entry 3329 (class 1259 OID 130411)
-- Name: PanelStorage_id_name_key; Type: INDEX; Schema: public; Owner: main
--

CREATE UNIQUE INDEX "PanelStorage_id_name_key" ON public."PanelStorage" USING btree (id, name);


--
-- TOC entry 3330 (class 1259 OID 130412)
-- Name: PanelStorage_name_key; Type: INDEX; Schema: public; Owner: main
--

CREATE UNIQUE INDEX "PanelStorage_name_key" ON public."PanelStorage" USING btree (name);


--
-- TOC entry 3339 (class 1259 OID 130413)
-- Name: User_email_key; Type: INDEX; Schema: public; Owner: main
--

CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);


--
-- TOC entry 3342 (class 1259 OID 130415)
-- Name: _PanelCaseToPanelMotherBoard_AB_unique; Type: INDEX; Schema: public; Owner: main
--

CREATE UNIQUE INDEX "_PanelCaseToPanelMotherBoard_AB_unique" ON public."_PanelCaseToPanelMotherBoard" USING btree ("A", "B");


--
-- TOC entry 3343 (class 1259 OID 130416)
-- Name: _PanelCaseToPanelMotherBoard_B_index; Type: INDEX; Schema: public; Owner: main
--

CREATE INDEX "_PanelCaseToPanelMotherBoard_B_index" ON public."_PanelCaseToPanelMotherBoard" USING btree ("B");


--
-- TOC entry 3344 (class 1259 OID 130417)
-- Name: _PanelCpuToPanelMotherBoard_AB_unique; Type: INDEX; Schema: public; Owner: main
--

CREATE UNIQUE INDEX "_PanelCpuToPanelMotherBoard_AB_unique" ON public."_PanelCpuToPanelMotherBoard" USING btree ("A", "B");


--
-- TOC entry 3345 (class 1259 OID 130418)
-- Name: _PanelCpuToPanelMotherBoard_B_index; Type: INDEX; Schema: public; Owner: main
--

CREATE INDEX "_PanelCpuToPanelMotherBoard_B_index" ON public."_PanelCpuToPanelMotherBoard" USING btree ("B");


--
-- TOC entry 3346 (class 1259 OID 130419)
-- Name: _PanelMotherBoardToPanelRam_AB_unique; Type: INDEX; Schema: public; Owner: main
--

CREATE UNIQUE INDEX "_PanelMotherBoardToPanelRam_AB_unique" ON public."_PanelMotherBoardToPanelRam" USING btree ("A", "B");


--
-- TOC entry 3347 (class 1259 OID 130420)
-- Name: _PanelMotherBoardToPanelRam_B_index; Type: INDEX; Schema: public; Owner: main
--

CREATE INDEX "_PanelMotherBoardToPanelRam_B_index" ON public."_PanelMotherBoardToPanelRam" USING btree ("B");


--
-- TOC entry 3348 (class 1259 OID 130421)
-- Name: _PanelMotherBoardToPanelStorage_AB_unique; Type: INDEX; Schema: public; Owner: main
--

CREATE UNIQUE INDEX "_PanelMotherBoardToPanelStorage_AB_unique" ON public."_PanelMotherBoardToPanelStorage" USING btree ("A", "B");


--
-- TOC entry 3349 (class 1259 OID 130422)
-- Name: _PanelMotherBoardToPanelStorage_B_index; Type: INDEX; Schema: public; Owner: main
--

CREATE INDEX "_PanelMotherBoardToPanelStorage_B_index" ON public."_PanelMotherBoardToPanelStorage" USING btree ("B");


--
-- TOC entry 3352 (class 2606 OID 130423)
-- Name: Case Case_panelCaseId_model_fkey; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."Case"
    ADD CONSTRAINT "Case_panelCaseId_model_fkey" FOREIGN KEY ("panelCaseId", model) REFERENCES public."PanelCase"(id, name) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3353 (class 2606 OID 130428)
-- Name: Category Category_brandId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."Category"
    ADD CONSTRAINT "Category_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES public."Brand"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3354 (class 2606 OID 130433)
-- Name: Color Color_caseId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."Color"
    ADD CONSTRAINT "Color_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES public."Case"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3355 (class 2606 OID 130438)
-- Name: Color Color_cpuId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."Color"
    ADD CONSTRAINT "Color_cpuId_fkey" FOREIGN KEY ("cpuId") REFERENCES public."Cpu"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3356 (class 2606 OID 130443)
-- Name: Color Color_gpuId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."Color"
    ADD CONSTRAINT "Color_gpuId_fkey" FOREIGN KEY ("gpuId") REFERENCES public."Gpu"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3357 (class 2606 OID 130448)
-- Name: Color Color_motherBoardId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."Color"
    ADD CONSTRAINT "Color_motherBoardId_fkey" FOREIGN KEY ("motherBoardId") REFERENCES public."MotherBoard"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3358 (class 2606 OID 130453)
-- Name: Color Color_powerSupplyId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."Color"
    ADD CONSTRAINT "Color_powerSupplyId_fkey" FOREIGN KEY ("powerSupplyId") REFERENCES public."PowerSupply"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3359 (class 2606 OID 130458)
-- Name: Color Color_ramId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."Color"
    ADD CONSTRAINT "Color_ramId_fkey" FOREIGN KEY ("ramId") REFERENCES public."Ram"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3360 (class 2606 OID 130463)
-- Name: Color Color_storageId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."Color"
    ADD CONSTRAINT "Color_storageId_fkey" FOREIGN KEY ("storageId") REFERENCES public."Storage"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3361 (class 2606 OID 130468)
-- Name: Cpu Cpu_panelCpuId_model_fkey; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."Cpu"
    ADD CONSTRAINT "Cpu_panelCpuId_model_fkey" FOREIGN KEY ("panelCpuId", model) REFERENCES public."PanelCpu"(id, name) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3362 (class 2606 OID 130473)
-- Name: Customize Customize_caseId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."Customize"
    ADD CONSTRAINT "Customize_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES public."Case"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 3363 (class 2606 OID 130478)
-- Name: Customize Customize_cpuId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."Customize"
    ADD CONSTRAINT "Customize_cpuId_fkey" FOREIGN KEY ("cpuId") REFERENCES public."Cpu"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 3364 (class 2606 OID 130483)
-- Name: Customize Customize_gpuId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."Customize"
    ADD CONSTRAINT "Customize_gpuId_fkey" FOREIGN KEY ("gpuId") REFERENCES public."Gpu"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 3365 (class 2606 OID 130488)
-- Name: Customize Customize_motherBoardId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."Customize"
    ADD CONSTRAINT "Customize_motherBoardId_fkey" FOREIGN KEY ("motherBoardId") REFERENCES public."MotherBoard"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 3366 (class 2606 OID 130493)
-- Name: Customize Customize_powerSupplyId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."Customize"
    ADD CONSTRAINT "Customize_powerSupplyId_fkey" FOREIGN KEY ("powerSupplyId") REFERENCES public."PowerSupply"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 3367 (class 2606 OID 130498)
-- Name: Customize Customize_ramId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."Customize"
    ADD CONSTRAINT "Customize_ramId_fkey" FOREIGN KEY ("ramId") REFERENCES public."Ram"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 3368 (class 2606 OID 130503)
-- Name: Customize Customize_storageId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."Customize"
    ADD CONSTRAINT "Customize_storageId_fkey" FOREIGN KEY ("storageId") REFERENCES public."Storage"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 3369 (class 2606 OID 130508)
-- Name: Customize Customize_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."Customize"
    ADD CONSTRAINT "Customize_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 3370 (class 2606 OID 130513)
-- Name: Gpu Gpu_paneGpulId_model_fkey; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."Gpu"
    ADD CONSTRAINT "Gpu_paneGpulId_model_fkey" FOREIGN KEY ("paneGpulId", model) REFERENCES public."PanelGpu"(id, name) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3371 (class 2606 OID 130518)
-- Name: Image Image_brandId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."Image"
    ADD CONSTRAINT "Image_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES public."Brand"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3372 (class 2606 OID 130523)
-- Name: Image Image_categooryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."Image"
    ADD CONSTRAINT "Image_categooryId_fkey" FOREIGN KEY ("categooryId") REFERENCES public."Category"(category_id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3373 (class 2606 OID 130528)
-- Name: Image Image_colorId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."Image"
    ADD CONSTRAINT "Image_colorId_fkey" FOREIGN KEY ("colorId") REFERENCES public."Color"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3374 (class 2606 OID 130533)
-- Name: MotherBoard MotherBoard_panelMotherBoardId_model_fkey; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."MotherBoard"
    ADD CONSTRAINT "MotherBoard_panelMotherBoardId_model_fkey" FOREIGN KEY ("panelMotherBoardId", model) REFERENCES public."PanelMotherBoard"(id, name) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3375 (class 2606 OID 130538)
-- Name: PanelCase PanelCase_categoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."PanelCase"
    ADD CONSTRAINT "PanelCase_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public."Category"(category_id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3376 (class 2606 OID 130543)
-- Name: PanelCpu PanelCpu_categoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."PanelCpu"
    ADD CONSTRAINT "PanelCpu_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public."Category"(category_id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3377 (class 2606 OID 130548)
-- Name: PanelGpu PanelGpu_categoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."PanelGpu"
    ADD CONSTRAINT "PanelGpu_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public."Category"(category_id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3378 (class 2606 OID 130553)
-- Name: PanelMotherBoard PanelMotherBoard_categoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."PanelMotherBoard"
    ADD CONSTRAINT "PanelMotherBoard_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public."Category"(category_id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3379 (class 2606 OID 130558)
-- Name: PanelPowerSupply PanelPowerSupply_categoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."PanelPowerSupply"
    ADD CONSTRAINT "PanelPowerSupply_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public."Category"(category_id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3380 (class 2606 OID 130563)
-- Name: PanelRam PanelRam_categoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."PanelRam"
    ADD CONSTRAINT "PanelRam_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public."Category"(category_id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3381 (class 2606 OID 130568)
-- Name: PanelStorage PanelStorage_categoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."PanelStorage"
    ADD CONSTRAINT "PanelStorage_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public."Category"(category_id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3382 (class 2606 OID 130573)
-- Name: PowerSupply PowerSupply_PanelPowerSupplyId_model_fkey; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."PowerSupply"
    ADD CONSTRAINT "PowerSupply_PanelPowerSupplyId_model_fkey" FOREIGN KEY ("PanelPowerSupplyId", model) REFERENCES public."PanelPowerSupply"(id, name) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3383 (class 2606 OID 130578)
-- Name: Ram Ram_panelRamId_model_fkey; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."Ram"
    ADD CONSTRAINT "Ram_panelRamId_model_fkey" FOREIGN KEY ("panelRamId", model) REFERENCES public."PanelRam"(id, name) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3384 (class 2606 OID 130583)
-- Name: Storage Storage_panelStorageId_model_fkey; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."Storage"
    ADD CONSTRAINT "Storage_panelStorageId_model_fkey" FOREIGN KEY ("panelStorageId", model) REFERENCES public."PanelStorage"(id, name) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3385 (class 2606 OID 130588)
-- Name: _PanelCaseToPanelMotherBoard _PanelCaseToPanelMotherBoard_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."_PanelCaseToPanelMotherBoard"
    ADD CONSTRAINT "_PanelCaseToPanelMotherBoard_A_fkey" FOREIGN KEY ("A") REFERENCES public."PanelCase"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3386 (class 2606 OID 130593)
-- Name: _PanelCaseToPanelMotherBoard _PanelCaseToPanelMotherBoard_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."_PanelCaseToPanelMotherBoard"
    ADD CONSTRAINT "_PanelCaseToPanelMotherBoard_B_fkey" FOREIGN KEY ("B") REFERENCES public."PanelMotherBoard"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3387 (class 2606 OID 130598)
-- Name: _PanelCpuToPanelMotherBoard _PanelCpuToPanelMotherBoard_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."_PanelCpuToPanelMotherBoard"
    ADD CONSTRAINT "_PanelCpuToPanelMotherBoard_A_fkey" FOREIGN KEY ("A") REFERENCES public."PanelCpu"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3388 (class 2606 OID 130603)
-- Name: _PanelCpuToPanelMotherBoard _PanelCpuToPanelMotherBoard_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."_PanelCpuToPanelMotherBoard"
    ADD CONSTRAINT "_PanelCpuToPanelMotherBoard_B_fkey" FOREIGN KEY ("B") REFERENCES public."PanelMotherBoard"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3389 (class 2606 OID 130608)
-- Name: _PanelMotherBoardToPanelRam _PanelMotherBoardToPanelRam_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."_PanelMotherBoardToPanelRam"
    ADD CONSTRAINT "_PanelMotherBoardToPanelRam_A_fkey" FOREIGN KEY ("A") REFERENCES public."PanelMotherBoard"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3390 (class 2606 OID 130613)
-- Name: _PanelMotherBoardToPanelRam _PanelMotherBoardToPanelRam_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."_PanelMotherBoardToPanelRam"
    ADD CONSTRAINT "_PanelMotherBoardToPanelRam_B_fkey" FOREIGN KEY ("B") REFERENCES public."PanelRam"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3391 (class 2606 OID 130618)
-- Name: _PanelMotherBoardToPanelStorage _PanelMotherBoardToPanelStorage_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."_PanelMotherBoardToPanelStorage"
    ADD CONSTRAINT "_PanelMotherBoardToPanelStorage_A_fkey" FOREIGN KEY ("A") REFERENCES public."PanelMotherBoard"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3392 (class 2606 OID 130623)
-- Name: _PanelMotherBoardToPanelStorage _PanelMotherBoardToPanelStorage_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."_PanelMotherBoardToPanelStorage"
    ADD CONSTRAINT "_PanelMotherBoardToPanelStorage_B_fkey" FOREIGN KEY ("B") REFERENCES public."PanelStorage"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3566 (class 0 OID 0)
-- Dependencies: 5
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: main
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;


-- Completed on 2023-07-28 21:43:23

--
-- PostgreSQL database dump complete
--

