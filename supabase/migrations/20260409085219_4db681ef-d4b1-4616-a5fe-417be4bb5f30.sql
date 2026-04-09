
-- Create table for maintenance technician applications
CREATE TABLE public.maintenance_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  cognome TEXT NOT NULL,
  azienda TEXT,
  email TEXT NOT NULL,
  prefisso TEXT NOT NULL DEFAULT '+39',
  cellulare TEXT NOT NULL,
  specializzazioni TEXT[] NOT NULL,
  citta TEXT[] NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.maintenance_applications ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public form, no auth required)
CREATE POLICY "Anyone can submit an application"
  ON public.maintenance_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- No select/update/delete for anon - data is private
