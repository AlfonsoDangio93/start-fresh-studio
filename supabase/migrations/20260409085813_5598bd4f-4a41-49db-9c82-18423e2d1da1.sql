
DROP POLICY "Authenticated users can read applications" ON public.maintenance_applications;

CREATE POLICY "Anyone can read applications"
  ON public.maintenance_applications
  FOR SELECT
  TO anon
  USING (true);
