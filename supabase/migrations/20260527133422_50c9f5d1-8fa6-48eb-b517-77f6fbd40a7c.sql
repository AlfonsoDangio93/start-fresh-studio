DROP POLICY IF EXISTS "Anyone can read applications" ON public.maintenance_applications;
REVOKE SELECT ON public.maintenance_applications FROM anon;