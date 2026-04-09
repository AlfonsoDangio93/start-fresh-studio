
-- Allow authenticated users to read applications (for admin page)
CREATE POLICY "Authenticated users can read applications"
  ON public.maintenance_applications
  FOR SELECT
  TO authenticated
  USING (true);
